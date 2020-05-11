import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/productListWithImage.css";
import voucherTelkomsel from "../images/voucherTelkomsel.jpg";

class FilterableProductList extends Component {
  
  componentDidMount = async () => {
    // Get all products list
    let productsList = await require('../json/productList.json');
    store.setState({
        productListWithImage: productsList
    })
  };

  render() {
    // Define an array that store information about the products
    let products = this.props.productListWithImage;

    // Define JSX variable to show all products
    let productsList = products.map((product, index) => {
        return (
            <div className="col-md-3 col-12 product-list-with-image-product-container" style={{minWidth: "312px"}}>
                <img src={voucherTelkomsel} alt={product.name} className="product-list-with-image-image"/>
                <div className="product-list-with-image-product-info">
                    <Link to={'/detail-produk'} className="product-list-with-image-formatting-link">
                        <span className="prouct-list-with-image-span-name">{product.name}</span>
                    </Link>
                    <br />
                    <span className="prouct-list-with-image-span-price">{product.price}</span>
                </div>
                {
                    index % 4 === 0 ?
                    <span></span>:
                    <div className="product-list-with-image-line"></div>
                }
            </div>
        )
    })

    return (
       <React.Fragment>
           <div className="container-fluid">
               <div className="row">
                   {productsList}
               </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("productListWithImage", actions)(withRouter(FilterableProductList));
