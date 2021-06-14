import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppHeader from '../app-header';

import { LikedApartament, AllApartament } from '../pages';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader />
                <Switch>
                    <Route path="/"
                        component={AllApartament} exact />
                    <Route path="/liked"
                        component={LikedApartament} />
                </Switch>
            </div>
        );
    }
}

export default App;