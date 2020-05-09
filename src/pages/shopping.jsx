import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Header from "../components/header";
import ProductListWithImage from "../components/productListWithImage";
import CheckboxFilter from "../components/checkboxFilter";
import ChooseRegion from "../components/chooseRegion";
import "../styles/bootstrap.min.css";
import "../styles/shopping.css";
import ChatButton from "../components/chatButton";

class Shopping extends Component {
  
  componentDidMount = async () => {
    
  };

  render() {
    return (
       <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
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
                <ProductListWithImage />
                <ProductListWithImage />
              </div>
            </div>
          </div>
        </div>
        <ChatButton/>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Shopping));
