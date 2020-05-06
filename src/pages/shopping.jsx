import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Header from "../components/header";
import ProductListWithImage from "../components/productListWithImage";
import CheckboxFilter from "../components/checkboxFilter";
import "../styles/bootstrap.min.css";
import "../styles/shopping.css";

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
            <div className="col-12 col-md-2 shopping-filter-container">
              <CheckboxFilter />
            </div>
            <div className="col-12 col-md-10 shopping-product-list">
              <ProductListWithImage />
              <ProductListWithImage />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Shopping));
