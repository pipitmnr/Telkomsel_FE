import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../components/header';
import Footer from "../components/footer";
import CheckoutForm from "../components/checkoutForm";
import CartList from "../components/cartList";
import ShoppingSummary from "../components/shoppingSummary";
import ChatButton from "../components/chatButton";

class Checkout extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 checkout-left-part">
                <CheckoutForm />
                <CartList />
              </div>
              <div className="col-12 col-md-5 checkout-right-part">
                <ShoppingSummary />
              </div>
            </div>
        </div>
        <ChatButton/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(Checkout));
