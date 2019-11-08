import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminHome from './components/Admin/Index'
import AllTickets from './components/Admin/AllTickets';
import AllUsers from './components/Admin/AllUsers';
import AdminRegister from './components/Admin/Register';
import AdminLogin from './components/Admin/Login';
import RespondTicket from './components/Admin/RespondTicket';


import AddRequest from './components/Contractor/AddRequest.jsx';
import AllRequests from './components/Contractor/Requests';
import PendingRequests from './components/Contractor/PendingRequests';
import CompletedRequests from './components/Contractor/CompletedRequests';
import Bidders from './components/Contractor/Bidders';
import EditTicket from './components/Contractor/EditRequest';
import Login from './components/Contractor/Login';
import Register from './components/Contractor/Register';

const Router = () => (
    <div>
        <Switch>
            <Route exact path="/admin/register" component={AdminRegister}/>
            <Route exact path="/admin/login" component={AdminLogin}/>
            <Route exact path="/admin" component={AdminHome}/>
            <Route exact path="/admin/allTickets" component={AllTickets}/>
            <Route exact path="/admin/respondTicket/:ticketID" component={RespondTicket}/>
            <Route path="/contractor/AddRequest" component={AddRequest} />
            <Route path="/contractor/allRequests" component={AllRequests}/>
            <Route path="/contractor/completedRequests" component={CompletedRequests}/>
            <Route path="/contractor/pendingRequests" component={PendingRequests}/>
            <Route path="/contractor/bidders/:request_id" component={Bidders}/>

            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/user/editTicket/:ticketID" component={EditTicket}/>
        </Switch>
    </div>
);

export default Router;