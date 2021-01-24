import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import View from '../components/View';
import ViewHome from '../components/ViewHome';
import Footer from '../components/Footer';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <Switch>
          <Route exact path="/" component={ViewHome} />
          <Route exact path="/view" component={View} />
          <Route exact path="/404" component={Page404} />
          <Route component={Page404} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

function Page404() {
  return <div className="Page404">404 ! This page does not exist</div>;
}
