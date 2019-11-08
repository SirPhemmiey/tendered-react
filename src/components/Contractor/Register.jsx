import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

const API = "http://localhost:4001/api/v1";

export default class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            firstname: '',
            lastname: '',
            password: '',
            confirm_password: '',
            type: '',
            loading: false,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }
     handleRegister = async(e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const { username , firstname, lastname, password, confirm_password, type } = this.state;
        if (username !== '' && firstname !== '' && lastname !== '' && password !== '' && confirm_password !== '' && type !== '') {
            if (password === confirm_password) {
                try {
                    const response = await axios.post(`${API}/register`, {
                        username,
                        firstname,
                        lastname,
                        password,
                        confirm_password,
                        type,
                    });
                    if (response.data.status == "success") {
                        this.setState({ loading: false })
                        alert(response.data.data.message);
                    }
                }
                catch(err) {
                    alert(err.response.data.payload.message)
                    this.setState({ loading: false });
                }
            } else {
                alert("Passwords do not match");
                this.setState({ loading: false });
            }
        } else {
            this.setState({ loading: false })
            alert("Please fill all fields");
        }
    }

    render() {
        return (
            <div className="">
            <div className="container">
            <div className="card card-register mx-auto mt-5">
        <div className="card-header">Register an Account</div>
        <div className="card-body">
        <Dots animating={this.state.loading}/>
          <form>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                  <label htmlFor="firstName">First Name</label>
                     <input type="text" name="firstname" className="form-control" required="required" onChange={this.handleChange}/>
                </div>
                <div className="col-md-6">
                <label htmlFor="lastName">Last name</label>
                    <input type="text" name="lastname" className="form-control" required="required" onChange={this.handleChange}/>   
                </div>
              </div>
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
                  <div className="col-md-6">
                  <label htmlFor="lastName">Username</label>
                    <input type="text" name="username" className="form-control" placeholder="Username" required="required" onChange={this.handleChange}/>
                  </div>
              </div>
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="col-md-6">
                <label htmlFor="inputPassword">Password</label>
                    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required="required" onChange={this.handleChange}/>
                </div>
                <div className="col-md-6">
                <label htmlFor="confirmPassword">Confirm password</label>
                    <input type="password" id="confirmPassword" name="confirm_password" className="form-control" placeholder="Confirm password" required="required" onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <Dots animating={this.state.loading}/>
            <button className="btn btn-primary btn-block" onClick={this.handleRegister} disabled={this.state.loading ? true : false}>{this.state.loading ? 'Registering...': 'Register'}</button>
          </form>
          <div className="text-center">
            <Link to="login" className="d-block small mt-7">Login</Link>
          </div>
        </div>
        </div>
        </div>
        </div>
        );
    }
}