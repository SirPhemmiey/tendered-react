  
import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header';
import SupplierSideBar from './SupplierSideBar'
import Footer from '../Footer';
import 'react-activity/lib/Dots/Dots.css';

export default class Dashboard extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillMount() {
      if (window.localStorage.getItem('token') === null) {
        return <Redirect to="/login"/>
      }
    }
    render() {
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
                &nbsp; Supplier Dashboard</div>
                
            <div className="card-body">
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