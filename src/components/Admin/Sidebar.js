import React from 'react';
import { Link } from 'react-router-dom';


export default class Sidebar extends React.Component {

    render() {
        return (
          <ul className="sidebar navbar-nav">
          <li className="nav-item active">
              <Link className="nav-link" to="/admin/allTickets">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>Dashboard</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/allUsers" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Users</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/allTickets" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Tickets</span>
              </Link>
          </li>

          <li className="nav-item">
            <Link to="/user/logout" className="nav-link">
              <i className="fas fa-fw fa-table"></i>
              <span>Logout</span>
              </Link>
          </li>

        </ul>
        );
    }
}