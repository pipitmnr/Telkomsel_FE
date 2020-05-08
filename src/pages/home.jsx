import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../components/header';
import Footer from "../components/footer";
import ProductListWithImage from '../components/productListWithImage';
import '../styles/home.css';

class Home extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <div className="container-fluid px-0">
          <div className="carousel">
            <img src="https://www.telkomsel.com/sites/default/files/banners/hero/desktop/BELAJAR-1200x480.jpg" alt=""/>
          </div>
          <div className="container">
            <div className="row align-items-center" style={{marginTop:"51px"}}>
              <div className="col-md-12 product-details-key">
                  Produk Unggulan
              </div>
              <div className="col-md-12 mb-4">
                  <ProductListWithImage/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(Home));
