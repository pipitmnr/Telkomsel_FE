import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'unistore/react';
import { store } from '../store';
import Home from '../pages/home';
import Shopping from '../pages/shopping';
import DaftarCluster from '../pages/daftarCluster';
import DaftarTransaksi from '../pages/DaftarTransaksi';
import LoginAdmin from '../pages/loginAdmin';
import DaftarProduk from '../pages/daftarProduk';
import Checkout from '../pages/checkout';
import ProductDetails from '../pages/productDetails';
import ModalTes from '../pages/tesModal';

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
					<Route exact path='/daftar-produk' component={DaftarProduk} />
					<Route exact path='/detail-produk' component={ProductDetails} />
					<Route exact path='/modal' component={ModalTes} />
					{/* <Route exact path="/login" component={Login} /> */}
					{/* <Route component={NotMatch} /> */}
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default MainRoute;
