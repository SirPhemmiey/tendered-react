import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import SideBar from './Sidebar'
import Footer from './Footer';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

export default class RespondTicket extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            response: '',
            message: ''
        }

        this.handleForm = this.handleForm.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }
    componentWillMount() {
      if (window.localStorage.getItem('token') === null) {
        return <Redirect to="/user/login"/>
      }
      //console.log(window.localStorage.getItem('firstName'));
    }
    handleResponse(e) {
      this.setState({
        response: e.target.value
      });
    }

    async handleForm(e) {
      e.preventDefault();
      this.setState({ loading: true });
      let { response } = this.state;
      const token = window.localStorage.getItem('token');
      let ticketID = this.props.match.params.ticketID;
      if (response !== '') {
        const result = await axios.post(`/tickets/respondTicket/${ticketID}`,
        { response },
        { headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }});
        if (result.data.success) {
          this.setState({
            loading: false,
            message: 'Successfully responded'
          });
        alert(result.data.message)
        }
        else {
          this.setState({
            loading: false
          });
          alert("Could not send response");
        }
      }
    }
    render() {

        return (
            <div>
                <Header />
                <div id="wrapper">
                <SideBar />
                <div id="content-wrapper">
               <div className="container-fluid">

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Welcome, {window.localStorage.getItem('firstName')}</li>
          </ol>

          <div className="card mb-3">
            <div className="card-header">
            <Dots animating={this.state.loading}/>
              <i className="fas fa-table"></i>
              Respond to Ticket </div>
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
            <div className="form-group">
              <div className="form-label-group">
                <textarea id="response" className="form-control" placeholder="Write your response here..."  cols="30" rows="10" onChange={this.handleResponse} ></textarea>
              </div>
            </div>
            <input onClick={this.handleForm} className="btn btn-primary btn-block" type="submit" value={this.state.loading ? 'Submitting..' : 'Respond'} disabled={this.state.loading ? true : false }/>
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