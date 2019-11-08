  
import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header';
import SupplierSideBar from './SupplierSideBar'
import Footer from '../Footer';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

const API = "http://localhost:4001/api/v1";

export default class AwardedBids extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            bids: []
        }
    }
   async componentWillMount() {
      if (window.localStorage.getItem('token') === null) {
        return <Redirect to="/login"/>
      }
      await this.getBids()
    }
    async getBids() {
        const token = window.localStorage.getItem('token');
        try {
            const request = await axios.get(`${API}/supplier/awardBids`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                }
            });
            if (request.data.status == "success") {
                this.setState({
                    bidders: request.data.data.bids,
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

    render() {
        const { bids} = this.state;
        return (
            <div>
                <Header />
                <div id="wrapper">
                <SupplierSideBar />
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

              <i className="fas fa-table"></i>
                &nbsp; All Your Awarded Bids</div>
                
            <div className="card-body">
            <div class="table-responsive">
            <Dots animating={this.state.loading}/>
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Machine name</th>
                      <th>Year</th>
                      <th>Model</th>
                      <th>Posted Date</th>
                      <th>Bid Date</th>
                      <th>Bid Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((bid, index) => {
                       return (
                        <tr key={index}>
                        <td>{index+1}</td>
                        <td>{bid.machine_name}</td>
                        <td>{bid.year}</td>
                        <td>{bid.model}</td>
                        <td>{bid.posted_date}</td>
                        <td>{new Date(bid.bid_date).toDateString()}</td>
                        <td>{bid.bid_price}</td>
                      </tr>
                       )
                    })}
                  </tbody>
                </table>
              </div>
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