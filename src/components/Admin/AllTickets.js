import React from 'react';
import axios from 'axios';
import Header from './Header';
import SideBar from './Sidebar'
import Footer from './Footer';
import Spinner from '../Spinner';
import { Redirect,Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';

export default class AllTickets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
            user: [],
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const token = window.localStorage.getItem('token');
        const tickets = await axios.get('/allTickets', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        if (tickets.data.tickets.length !== 0) {
            this.setState({ tickets: tickets.data.tickets });
             //alert("Empty suc");
        }
        else if (tickets.data.tickets.length == '') {
        alert("Empty");
        this.setState({ loading: false });
         }
        else if (tickets.data.message == 'Unauthorized Access') {
         return <Redirect to="/user/login" />
        }
    }

    render() {
      let { tickets } = this.state;
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
            <li className="breadcrumb-item active">All tickets</li>
          </ol>

          <div className="card mb-3">
            <div className="card-header">
              <i className="fas fa-table"></i>
              Tickets</div>
            <div className="card-body">
              <div className="table-responsive">
                <Accordion>
                {
                      tickets.length == '' ? <Dots animating={this.state.loading}/> :
                      (
                        tickets.map((ticket, index) => {
                          return (
                            <AccordionItem key={index}>
                            <AccordionItemTitle>
                                <h4>{ticket.subject} by {ticket.user.firstName}</h4>
                            </AccordionItemTitle>
                            <AccordionItemBody>
                                <p>{ticket.complain}</p>
                               <Link to={`/admin/respondTicket/${ticket._id}`}> <button className="btn btn-primary">Respond</button></Link>
                            </AccordionItemBody>
                        </AccordionItem>
                          );
                    }))
                    }
    </Accordion>
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