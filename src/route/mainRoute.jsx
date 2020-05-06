import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "unistore/react";
import { store } from "../store";
import Home from "../pages/home";
import Shopping from "../pages/shopping";
import DaftarCluster from '../pages/daftarCluster';
import DaftarTransaksi from '../pages/DaftarTransaksi'

const MainRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* PAGES ROUTING */}
          <Route exact path="/" component={Home} />
          <Route exact path="/belanja" component={Shopping} />
          <Route exact path='/daftar-cluster' component={DaftarCluster} />
          <Route exact path='/daftar-transaksi' component={DaftarTransaksi}/>
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
