import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false
        }
        this.handleRegister = this.handleRegister.bind(this);
    }
    handleUsername(e) {
        //alert("u")
        this.setState({ username: e.target.value });
    }
    handlePassword(e) {
        //alert("p")
        this.setState({ password: e.target.value });
    }
   async handleRegister(e) {
        e.preventDefault();
        this.setState({ loading: true });
        const { username, password} = this.state;
        if (username != '' || password != '') {
                const send = await axios.post('/admin/signup', {
                    username, password
                });

                if (send.data.success) {
                    this.setState({loading: false})
                    alert("Registered successfully");
                }
                else {
                    this.setState({ loading: false });
                    alert(send.data.message)
                }
        }
        else {
            alert("Please fill all fields");
        }
    }

    render() {
        return (
            <div className="bg-dark">
            <div className="container">
            <div className="card card-register mx-auto mt-5">
        <div className="card-header">Register an Account - Admin</div>
        <div className="card-body">
        <Dots animating={this.state.loading}/>
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-label-group">
                  <label htmlFor="firstName">Username</label>
                    *<input type="text" name="username" className="form-control" placeholder="Username" required="required" autofocus="autofocus" onChange={this.handleUsername.bind(this)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <div className="form-label-group">
                    *<input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required="required" onChange={this.handlePassword.bind(this)}/>
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                </div>
              </div>
            </div>
            <Dots animating={this.state.loading}/>
            <button className="btn btn-primary btn-block" onClick={this.handleRegister} disabled={this.state.loading ? true : false}>{this.state.loading ? 'Registering...': 'Register'}</button>
          </form>
          <div className="text-center">
            <Link to="/admin/login" className="d-block small mt-3">Login</Link>
            <Link to="#" className="d-block small">Forgot Password?</Link>
          </div>
        </div>
      </div>
        </div>
        </div>
        );
    }
}