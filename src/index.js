import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary';
import ApartamentService from './services';
import { ApartamentServiceProvider } from './components/apartament-service-context';
import App from './components/app';

import store from './store';

const apartamentService = new ApartamentService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ApartamentServiceProvider value={apartamentService}>
                <Router>
                    <App />
                </Router>
            </ApartamentServiceProvider>
        </ErrorBoundary>
    </Provider>
    , document.getElementById('root'));
