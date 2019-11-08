import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AdminHome from './components/Admin/Index'

import AddRequest from './components/Contractor/AddRequest.jsx';
import AllRequests from './components/Contractor/Requests';
import PendingRequests from './components/Contractor/PendingRequests';
import CompletedRequests from './components/Contractor/CompletedRequests';
import Bidders from './components/Contractor/Bidders';
import Login from './components/Contractor/Login';
import Register from './components/Contractor/Register';

import LiveRequests from './components/Supplier/liveRequests';
import AllBids from './components/Supplier/allBids';
import AwardedBids from './components/Supplier/awardedBids';


const Router = () => (
    <div>
        <Switch>
            <Route path="/contractor/AddRequest" component={AddRequest} />
            <Route path="/contractor/allRequests" component={AllRequests}/>
            <Route path="/contractor/completedRequests" component={CompletedRequests}/>
            <Route path="/contractor/pendingRequests" component={PendingRequests}/>
            <Route path="/contractor/bidders/:request_id" component={Bidders}/>

            <Route path="/supplier/liveRequests" component={LiveRequests}/>
            <Route path="/supplier/allBids" component={AllBids}/>
            <Route path="/supplier/awardedBids" component={AwardedBids}/>

            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Switch>
    </div>
);

export default Router;