import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Roster from './pages/Roster';
import Activities from './pages/Activities';
import Links from './pages/Links';
import Files from './pages/Files';


const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/roster" component={Roster}/>
            <Route path="/activities" component={Activities}/>
            <Route path="/links" component={Links}/>
            <Route path="/files" component={Files}/>
        </Switch>
    );
}

export default Routes;