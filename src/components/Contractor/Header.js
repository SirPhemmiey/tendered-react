import React from 'react';
import bootstrap from '../../assets/css/bootstrap.min.css';
//import fontAwesome from '../../assets/css/fontawesome.min.css';
import fontAwesome from '../../assets/css/all.min.css';
import dataTables from '../../assets/css/dataTables.bootstrap4.css'
import sbAdmin from '../../assets/css/sb-admin.css';


// require('../../assets/js/jquery.min');
// require('../../assets/js/bootstrap.bundle.min');
// require('../../assets/js/jquery.easing.min.min');
// require('../../assets/js/jquery.dataTables');
// require('../../assets/js/dataTables.bootstrap4');
// require('../../assets/js/sb-admin');

export default class Header extends React.Component {
    render() {
        return (
          <div>

          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="description" content="" />
          <meta name="author" content="" />

          <title>SB Admin - Dashboard</title>

          <link href={bootstrap} rel="stylesheet" type="text/css"/>

          <link href={fontAwesome} rel="stylesheet" type="text/css" />


          <link href={dataTables} rel="stylesheet" type="text/css"/>


          <link href={sbAdmin} rel="stylesheet" type="text/css"/>


          <nav className="navbar navbar-expand navbar-dark bg-dark static-top">

<a className="navbar-brand mr-1" href="index.html">Start Bootstrap</a>

<button className="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
  <i className="fas fa-bars"></i>
</button>


<form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
    <div className="input-group-append">
      <button className="btn btn-primary" type="button">
        <i className="fas fa-search"></i>
      </button>
    </div>
  </div>
</form>


<ul className="navbar-nav ml-auto ml-md-0">
  <li className="nav-item dropdown no-arrow mx-1">
    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-bell fa-fw"></i>
      <span className="badge badge-danger">9+</span>
    </a>
    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </li>
  <li className="nav-item dropdown no-arrow mx-1">
    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-envelope fa-fw"></i>
      <span className="badge badge-danger">7</span>
    </a>
    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
      <a className="dropdown-item" href="#">Action</a>
      <a className="dropdown-item" href="#">Another action</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#">Something else here</a>
    </div>
  </li>
  <li className="nav-item dropdown no-arrow">
    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <i className="fas fa-user-circle fa-fw"></i>
    </a>
    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
      <a className="dropdown-item" href="#">Settings</a>
      <a className="dropdown-item" href="#">Activity Log</a>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
    </div>
  </li>
</ul>

</nav>
      </div>

        );
    }
}