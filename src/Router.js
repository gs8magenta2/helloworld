import React, {Component} from 'react';
import {Router, Route, Redirect, browserHistory} from 'react-router';
import Summary from './Summary'
import ContactPage from './ContactPage'

class MyRouter extends Component {

    render() {

        return (
            <Router history={browserHistory}>
                <Redirect from="/" to="home"/>
                <Route path="/home" component={ContactPage}></Route>
                <Route path="/summary" component={Summary}></Route>

            </Router>
        );
    }
}

export default MyRouter;
