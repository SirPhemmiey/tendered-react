import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class ContractorSidebar extends React.Component {

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
            <Link to="/contractor/addRequest" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Add New Request</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/contractor/allRequests" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>All Requests</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/contractor/pendingRequests" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Pending Requests</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/contractor/completedRequests" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Completed Requests</span>
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