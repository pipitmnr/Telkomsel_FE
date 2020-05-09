import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import Header from "../components/header";
import PageTitle from "../components/pageTitle";
import FilterableProductList from "../components/filterableProductList.jsx";
import CheckboxFilter from "../components/checkboxFilter";
import ChooseRegion from "../components/chooseRegion";
import Footer from "../components/footer";
import "../styles/bootstrap.min.css";
import "../styles/shopping.css";
import ChatButton from "../components/chatButton";

class Shopping extends Component {
  
  componentDidMount = async () => {
    // Set some property to default
    store.setState({
      productListWithImage: [],
      isPerdanaSegel: false,
      isPerdanaPaketData: false,
      isVoucherData: false
    })
  };

  render() {
    return (
       <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <PageTitle />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-2 shopping-filter-container shopping-product-z-10">
              <CheckboxFilter />
            </div>
            <div className="col-12 col-md-10 shopping-product-list">
              <div className="shopping-absolute-position">
                <ChooseRegion />
              </div>
              <div className="shopping-product-list-box">
                <div className="shopping-product-list">
                  <FilterableProductList />
                </div>
                <div className="shopping-footer">
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ChatButton/>
      </React.Fragment>
    );
  }
}

export default connect("productListWithImage, isPerdanaSegel, isPerdanaPaketData, isVoucherData", actions)(withRouter(Shopping));
