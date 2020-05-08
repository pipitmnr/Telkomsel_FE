import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/productListWithImage.css";
import voucherTelkomsel from "../images/voucherTelkomsel.jpg"

class ProductListWithImage extends Component {
  
  componentDidMount = async () => {
    
  };

  render() {
    // Define an array that store information about the products
    let products = [
        {
            "name": "Nama Produk",
            "price": "Rp. 15.000",
            "image": voucherTelkomsel
        },
        {
            "name": "Perdana Paket Data",
            "price": "Rp. 15.000",
            "image": voucherTelkomsel
        },
        {
            "name": "Voucher Data",
            "price": "Rp. 15.000",
            "image": voucherTelkomsel
        },
        {
            "name": "Voucher Data",
            "price": "Rp. 15.000",
            "image": voucherTelkomsel
        }
    ];

    // Define JSX variable to show all products
    let productsList = products.map((product, index) => {
        return (
            <div className="col-md-3 col-12 product-list-with-image-product-container">
                <img src={product.image} alt={product.name} className="product-list-with-image-image"/>
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

export default connect("", actions)(withRouter(ProductListWithImage));
