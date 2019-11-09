import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';
import SupplierSidebar from './SupplierSideBar';

require('dotenv').config();

const API = process.env.REACT_APP_BASEURL

export default class Bid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            bid_price: '',
            request: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }
    async componentWillMount() {
      if (window.localStorage.getItem('token') === null) {
        return <Redirect to="/login"/>
      }
      await this.getRequest();
    }

    async getRequest() {
        const token = window.localStorage.getItem('token');
        const request_id = this.props.match.params.request_id;
        try {
            const result = await axios.get(`${API}/supplier/getRequest/${request_id}`,
            { headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            }});
            if (result.data.status == "success") {
                //alert("koo")
                this.setState({
                    request: result.data.data.request,
                    loading: false
                });
            }
        }
        catch(err) {
            alert(err.response.data.payload.message)
            this.setState({
              loading: false,
              message: err.response.data.payload.message
            });
        }
    }

     handleForm = async(e) => {
      e.preventDefault();
      this.setState({ loading: true });
      const bid_price = this.state.bid_price;
      const request_id = this.props.match.params.request_id;
      const token = window.localStorage.getItem('token');
        try {
          const result = await axios.post(`${API}/supplier/bid`,
        { request: request_id,
        bid_price },
        { headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }});
        if (result.data.status == "success") {
          this.setState({
            loading: false,
            message: result.data.data.message,
          });
        }
        }
        catch(err) {
          alert(err.response.data.payload.message)
          this.setState({
            loading: false,
            message: err.response.data.payload.message
          });
      }
    }

    render() {
        const {request} = this.state;
        return (
            <div>
                <Header />
                <div id="wrapper">
                <SupplierSidebar />
                <div id="content-wrapper">
               <div className="container-fluid">

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Welcome!</li>
          </ol>

          <div className="card mb-3">
            <div className="card-header">
            <Dots animating={this.state.loading}/>
              <i className="fas fa-table"></i>
             &nbsp; Bid for this Request </div>
          {
            this.state.message ?
            <div className="alert alert-warning alert-dismissible" role="alert">
            <button type="button" className="close" dataDismiss="alert" ariaLabel="Close"><span ariaHidden="true">&times;</span></button>
            {this.state.message}
          </div>
            : ''
          }

            <div className="card-body">
            <form>
              <Dots animating={this.state.loading}/>
        <span>Machine Name: {request.machine_name}</span> <br />
        <span>Year: {request.year}</span> <br />
        <span>Model: {request.model}</span> <br />
        <span>Capacity: {request.capacity}</span> <br />
        &nbsp; &nbsp;
              <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="">Bid Price</label>
                     <input type="number" name="bid_price" className="form-control" required="required" onChange={this.handleChange}/>
                </div>
            </div>
            </div>
                <button className="btn btn-primary btn-md" onClick={this.handleForm} disabled={this.state.loading ? true : false}>{this.state.loading ? 'Submitting...' : 'Submit Bid'}</button>
              </form>
            </div>
          </div>

        </div>
        <Footer />
            </div>
            </div>
            </div>
        );
    }
}