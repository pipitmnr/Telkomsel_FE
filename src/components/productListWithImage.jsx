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
    return (
       <React.Fragment>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-md-3 col-12 product-list-with-image-product-container">
                       <img src={voucherTelkomsel} alt="Voucher Telkomsel" className="product-list-with-image-image"/>
                       <div className="product-list-with-image-product-info">
                            <Link to={'/detail-produk'} className="product-list-with-image-formatting-link">
                                <span className="prouct-list-with-image-span-name">Nama Produk</span>
                            </Link>
                            <br />
                            <span className="prouct-list-with-image-span-price">Rp 15.000</span>
                       </div>
                   </div>
                   <div className="col-md-3 col-12 product-list-with-image-product-container">
                       <img src={voucherTelkomsel} alt="Voucher Telkomsel" className="product-list-with-image-image"/>
                       <div className="product-list-with-image-line" />
                       <div className="product-list-with-image-product-info">
                            <Link to={'/detail-produk'} className="product-list-with-image-formatting-link">
                                <span className="prouct-list-with-image-span-name">Perdana Paket Data</span>
                            </Link>
                            <br />
                            <span className="prouct-list-with-image-span-price">Rp 15.000</span>
                       </div>
                   </div>
                   <div className="col-md-3 col-12 product-list-with-image-product-container">
                       <img src={voucherTelkomsel} alt="Voucher Telkomsel" className="product-list-with-image-image"/>
                       <div className="product-list-with-image-line" />
                       <div className="product-list-with-image-product-info">
                            <Link to={'/detail-produk'} className="product-list-with-image-formatting-link">
                                <span className="prouct-list-with-image-span-name">Voucher Data</span>
                            </Link>
                            <br />
                            <span className="prouct-list-with-image-span-price">Rp 15.000</span>
                       </div>
                   </div>
                   <div className="col-md-3 col-12 product-list-with-image-product-container">
                       <img src={voucherTelkomsel} alt="Voucher Telkomsel" className="product-list-with-image-image"/>
                       <div className="product-list-with-image-line" />
                       <div className="product-list-with-image-product-info">
                            <Link to={'/detail-produk'} className="product-list-with-image-formatting-link">
                                <span className="prouct-list-with-image-span-name">Voucher Data</span>
                            </Link>
                            <br />
                            <span className="prouct-list-with-image-span-price">Rp 15.000</span>
                       </div>
                   </div>
               </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(ProductListWithImage));
