import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../components/header';
import Footer from "../components/footer";
import ProductListWithImage from "../components/productListWithImage";
import "../styles/home.css";
import ChatButton from "../components/chatButton";

class Home extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <div className="container carousel">
          carousel
        </div>
        <ChatButton/>
        <ProductListWithImage/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(Home));
