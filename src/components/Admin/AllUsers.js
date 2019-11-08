import React from 'react';
import axios from 'axios';
import Header from './Header';
import SideBar from './Sidebar'
import Footer from './Footer';
import Spinner from '../Spinner';

export default class AllUsers extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const data = await axios.get('/users');
        if (data.tickets) {
            const data = data.tickets;
            this.setState({ users: data });
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                <SideBar />
                <div id="content-wrapper">
               <div className="container-fluid">

          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">All users</li>
          </ol>

          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-table"></i>
              Users</div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
          </div>

        </div>
        <Footer />
            </div>
            </div>
            </div>
        );
    }
}