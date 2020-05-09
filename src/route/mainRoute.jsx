import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'unistore/react';
import {store} from '../store';
import Home from '../pages/home';
import Shopping from '../pages/shopping';
import DaftarCluster from '../pages/daftarCluster';
import DaftarTransaksi from '../pages/DaftarTransaksi';
import LoginAdmin from '../pages/loginAdmin';
import DaftarProduk from '../pages/daftarProduk';
import Checkout from '../pages/checkout';
import ProductDetails from '../pages/productDetails';
import LaporanPenjualan from '../pages/LaporanPenjualan';
import TransactionDetail from '../pages/DetailTrans';
import ResetPassword from '../pages/reset-password';

const MainRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* PAGES ROUTING */}
          <Route exact path='/' component={Home} />
          <Route exact path='/belanja' component={Shopping} />
          <Route exact path='/daftar-cluster' component={DaftarCluster} />
          <Route exact path='/daftar-transaksi' component={DaftarTransaksi} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/login-admin' component={LoginAdmin} />
          <Route exact path='/reset-password' component={ResetPassword} />
          <Route exact path='/daftar-produk' component={DaftarProduk} />
          <Route exact path='/detail-produk' component={ProductDetails} />
          <Route exact path='/laporan-penjualan' component={LaporanPenjualan} />
          <Route exact path='/detail-transaksi' component={TransactionDetail} />
          {/* <Route exact path="/login" component={Login} /> */}
          {/* <Route component={NotMatch} /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default MainRoute;
