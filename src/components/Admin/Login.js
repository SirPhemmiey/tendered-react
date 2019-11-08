import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loading: false,
            redirect: false
        }

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }
    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    async handleLogin(e) {
        e.preventDefault();
        const { username, password} = this.state;
        if (username != '' || password != '') {
                const send = await axios.post('/admin/signin', {
                   username, password
                });
                this.setState({ loading: true });
                if (send.data.success) {
                    this.setState({loading: false, redirect: true });
                    const values = [send.data.token, send.data.firstName];
                    // window.localStorage.setItem('token', JSON.stringify(values));
                    window.localStorage.setItem('token', values[0]);
                    window.localStorage.setItem('firstName', values[1]);
                }
                else {
                    this.setState({ loading: false });
                    alert(send.data.message);
                }
        }
        else {
            alert("Please fill all fields");
        }
    }

    render() {
        if (!this.state.redirect) {
            return (
                <div className="bg-dark">
                <div className="container">
                <div className="card card-login mx-auto mt-5">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
              <Dots animating={this.state.loading}/>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="text" id="inputEmail" className="form-control" placeholder="Username" required="required" name="username" autofocus="autofocus" onChange={this.handleUsername.bind(this)}/>
                    <label for="inputEmail">Username</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required="required" onChange={this.handlePassword.bind(this)}/>
                    <label for="inputPassword">Password</label>
                  </div>
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="remember-me" />
                      Remember Password
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary btn-block" onClick={this.handleLogin} disabled={this.state.loading ? true : false}>{this.state.loading ? 'Logging in...' : 'Login'}</button>
              </form>
              <div className="text-center">
              <Link className="d-block small mt-3" to="/admin/register">Register an Account</Link>
              <Link className="d-block small mt-3" to="#">Forgot Password</Link>
              </div>
            </div>
          </div>
            </div>
            </div>
            );
        }
        else {
            return <Redirect to="/admin/allTickets"/>
        }
    }
}