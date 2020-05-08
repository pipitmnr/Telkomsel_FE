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
        <div className="container-fluid">
          <div className="carousel">
            <img src={require("../images/#dirumahterusbelajar.jpg")} alt=""/>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 product-details-key">
                Produk Unggulan
            </div>
            <div className="col-md-12 mb-4">
                <ProductListWithImage/>
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(Home));
