import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';
const API = "http://localhost:4001/api/v1";

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: null,
            password: null,
            type: '',
            loading: false,
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      //alert(event.target.value)
      this.setState({ [event.target.name]: event.target.value });
  }

     handleLogin = async(e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const { username, password, type} = this.state;
        if (username !== '' && password !== '') {
               try {
                const response = await axios.post(`${API}/login`, {
                  username, password, type
               });
               console.log(response.data);
               if (response.data.status == "success") {
                   this.setState({loading: false, redirect: true });
                   // const values = [response.data.token, response.data.firstName, response.data.id];
                   // window.localStorage.setItem('token', JSON.stringify(values));
                   window.localStorage.setItem('token', response.data.data.token);
               }
               }
               catch(err) {
                alert(err.response.data.payload.message)
                this.setState({ loading: false });
            }
        }
        else {
          this.setState({ loading: false });
            alert("Please fill all fields");
        }
    }

    render() {
      const type = this.state.type;
        if (!this.state.redirect) {
            return (
                <div className="">
                <div className="container">
                <div className="card card-login mx-auto mt-5">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
              <Dots animating={this.state.loading}/>
                <div className="form-group">
                <label htmlFor="inputEmail">Username</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="required" name="username" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                <label for="inputPassword">Password</label>
                    <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required="required" onChange={this.handleChange}/>
                </div>
                
                <div className="form-group">
              <div className="form-row">
                  <div className="col-md-6">
                  <label htmlFor="lastName">Choose Type</label>
                  <select name="type" id="" className="form-control" onChange={this.handleChange}>
                      <option value="">---Choose Type---</option>
                      <option value="contractor">Contractor</option>
                      <option value="supplier">Supplier</option>
                  </select>
                  </div>
              </div>
            </div>

                <button className="btn btn-primary btn-block" onClick={this.handleLogin} disabled={this.state.loading ? true : false}>{this.state.loading ? 'Logging in...' : 'Login'}</button>
              </form>
              <div className="text-center">
              <Link className="d-block small mt-3" to="/register">Register an Account</Link>
              </div>
            </div>
          </div>
            </div>
            </div>
            );
        }
        else {
            return type == 'contractor' ? <Redirect to="/contractor/addRequest"/> : <Redirect to="/supplier/liveRequests" />
        }
    }
}