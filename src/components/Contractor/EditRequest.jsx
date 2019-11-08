import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import Header from './Header';
import SideBar from './ContractorSideBar'
import Footer from './Footer';
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';


export default class EditTicket extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            complain: '',
            subject: '',
            loading: false,
            details: '',
            message: ''
        }
        this.updateTicket = this.updateTicket.bind(this);
        this.handleComplain = this.handleComplain.bind(this);
        this.handleSubject = this.handleSubject.bind(this);
    }

    async getDetails() {
        this.setState({ loading: true })
        const token = window.localStorage.getItem('token');
        const ticketDetails = await axios.get(`/users/getTicketInfo/${this.props.match.params.ticketID}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (ticketDetails.data.success) {
            this.setState({ loading: false, details: ticketDetails.data.data });
            //alert("yes")
        } else {
            // alert("nothing");
        }
    }
    handleComplain(e) {
        this.setState({
            complain: e.target.value
        });
    }
    handleSubject(e) {
        this.setState({
            subject: e.target.value
        });
    }


    async updateTicket(e) {
        e.preventDefault();
        this.setState({ loading: true })
        let { complain, subject } = this.state;
        let p = this.props.match.params.ticketID;
        const token = window.localStorage.getItem('token');
        const ticketUpdate = await axios.put(`/users/editTicket`, { complain, subject, p }, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            }
        });
        if (ticketUpdate.data.success) {
            this.setState({ loading: false, details: ticketUpdate.data.data });
            alert("Update successful");
        } else {
            alert(ticketUpdate.data.message)
            alert("no faa")
        }
    }

    componentWillMount() {
        if (window.localStorage.getItem('token') === null) {
            return <Redirect to = "/user/login" / >
        }
    }

    async componentDidMount() {
        await this.getDetails();
    }

    render() {
        let { details } = this.state;
        return ( <
            div >
            <
            Header / >
            <
            div id = "wrapper" >
            <
            SideBar / >
            <
            div id = "content-wrapper" >
            <
            div className = "container-fluid" >

            <
            ol className = "breadcrumb" >
            <
            li className = "breadcrumb-item" >
            <
            a href = "#" > Dashboard < /a> <
            /li> <
            li className = "breadcrumb-item active" > Welcome, { window.localStorage.getItem('firstName') } < /li> <
            /ol>

            <
            div className = "card mb-3" >
            <
            div className = "card-header" >
            <
            Dots animating = { this.state.loading }
            /> <
            i className = "fas fa-table" > < /i>
            Edit Ticket < /div> {
                this.state.message ?
                    <
                    div className = "alert alert-warning alert-dismissible"
                role = "alert" >
                    <
                    button type = "button"
                className = "close"
                dataDismiss = "alert"
                ariaLabel = "Close" > < span ariaHidden = "true" > & times; < /span></button > { this.state.message } <
                /div>: ''
            }

            <
            div className = "card-body" >
            <
            form >
            <
            div className = "form-group" >
            <
            div className = "form-label-group" >
            <
            input type = "text"
            name = "subject"
            onChange = { this.handleSubject }
            className = "form-control" / >
            <
            label htmlFor = "inputEmail" > { details.subject } < /label> <
            /div> <
            /div> <
            div className = "form-group" >
            <
            div className = "form-label-group" >
            <
            textarea id = "complain"
            name = "complain"
            placeholder = { details.complain }
            className = "form-control"
            cols = "30"
            rows = "10"
            onChange = { this.handleComplain } > < /textarea> <
            /div> <
            /div> <
            input onClick = { this.updateTicket }
            className = "btn btn-primary btn-block"
            type = "submit"
            value = { this.state.loading ? 'Submitting..' : 'Update' }
            disabled = { this.state.loading ? true : false }
            /> <
            /form> <
            /div> <
            /div> <
            /div> <
            Footer / >
            <
            /div> <
            /div> <
            /div>
        );
    }
}