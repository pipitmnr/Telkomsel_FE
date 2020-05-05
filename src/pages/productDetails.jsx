import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../components/header';
import Footer from "../components/footer";
import PageTitle from "../components/pageTitle"

class ProductDetails extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <PageTitle />
        <div className="container">
          detail produk
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(ProductDetails));
