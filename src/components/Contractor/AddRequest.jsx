import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header';
import ContractorSideBar from './ContractorSideBar'
import Footer from '../Footer';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

require('dotenv').config()

const API = process.env.REACT_APP_BASEURL
export default class AddRequest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            machine_name: '',
            year: '',
            model: '',
            capacity: '',
            location: '',
            timeline: '',
        }

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }
    componentWillMount() {
      if (window.localStorage.getItem('token') === null) {
        return <Redirect to="/login"/>
      }
    }

     handleFormm = async(e) => {
      e.preventDefault();
      this.setState({ loading: true });
      const token = window.localStorage.getItem('token');
        try {
          const result = await axios.post(`${API}/contractor/addRequest`,
        { ...this.state },
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
    componentDidMount() {
      //const token = window.localStorage.getItem('token');
      //alert(token);
    }

    render() {

        return (
            <div>
                <Header />
                <div id="wrapper">
                <ContractorSideBar />
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
             &nbsp; Add a Request </div>
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
              <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="">Machine Name</label>
                     <input type="text" name="machine_name" className="form-control" required="required" onChange={this.handleChange}/>
                </div>
                <div className="col-md-6">
                <label htmlFor="">Year</label>
                    <input type="text" name="year" className="form-control" required="required" onChange={this.handleChange}/>   
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="">Model</label>
                     <input type="text" name="model" className="form-control" required="required" onChange={this.handleChange}/>
                </div>
                <div className="col-md-6">
                <label htmlFor="">Capacity</label>
                    <input type="number" name="capacity" className="form-control" required="required" onChange={this.handleChange}/>   
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="">Location</label>
                     <input type="text" name="location" className="form-control" required="required" onChange={this.handleChange}/>
                </div>
                <div className="col-md-6">
                <label htmlFor="lastName">Time</label>
                    <input type="date" name="timeline" className="form-control" required="required" onChange={this.handleChange}/>   
                </div>
              </div>
            </div>
                <button className="btn btn-primary btn-md" onClick={this.handleFormm} disabled={this.state.loading ? true : false}>{this.state.loading ? 'Submitting...' : 'Add Request'}</button>
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