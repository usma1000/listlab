import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AddMovieForm from './AddMovieForm';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/add" component={AddMovieForm} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;