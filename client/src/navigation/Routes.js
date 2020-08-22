import React from 'react';
import { Switch, Route } from "react-router-dom";

import {
    Appointment,
    Billing,
    Canceled,
    Checkout,
    Home,
    Messages,
    Profile,
    Results,
    Success,
} from "../components";

const Routes = () => 
    <Switch>
        <Route exact path="/appointments" component={Appointment} />
        <Route exact path="/billing" component={Billing} />
        <Route exact path="/canceled" component={Canceled} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/messages" component={Messages} /> 
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/results" component={Results} />
        <Route exact path="/success" component={Success} />
        <Route path="/" component={Home} />
    </Switch>

export default Routes;