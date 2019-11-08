import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class SupplierSidebar extends React.Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
     logout() {
        //const tokens = window.localStorage.getItem('token');
        window.localStorage.clear();
        return <Redirect to="/login"/>
        
    }
    render() {
        return (
          <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <Link to="/supplier/liveRequests" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Live Request</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/supplier/awardedBids" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Awarded Bids</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/supplier/allBids" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>All Bids</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/login" onClick={this.logout} className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Logout</span>
              </Link>
          </li>

        </ul>
        );
    }
}