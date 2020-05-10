import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../components/header';
import Footer from "../components/footer";
import PageTitle from "../components/pageTitle";
import "../styles/productDetails.css";
import ProductListWithImage from "../components/productListWithImage";
import ChatButton from "../components/chatButton";

class ProductDetails extends Component {
  componentDidMount = async () => {};
  goToCheckout = async() => {
    const self = this;
    let path = `/checkout`;
    self.props.history.push(path);
  }

  render() {
    return (
      <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <PageTitle pageTitle="Voucher Paket Data"/>
        <div className="container font-muli">
          <div className="row mt-4">
            <div className="col-md-6 text-center">
                <img className="product-details-image" src={require("../images/voucherTelkomsel.jpg")} alt=""/>
            </div>
            <div className="col-md-6">
                <div className="row align-items-center">
                    <div className="col-md-12 product-details-name">
                        Voucher Perdana 8 GB
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12 product-details-title-description">
                        Deskripsi Produk
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-md-12">
                        <p className="product-details-description" style={{marginBottom:"13px"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center product-details-key-value">
                    <div className="col-md-3 product-details-key">
                        Stok saat ini
                    </div>
                    <div className="col-md-9 product-details-value">
                        15
                    </div>
                </div>
                <div className="row align-items-center product-details-key-value">
                    <div className="col-md-3 product-details-key">
                        Harga
                    </div>
                    <div className="col-md-9 product-details-value">
                        Rp. 15.000
                    </div>
                </div>
                <div className="row align-items-center product-details-key-value">
                    <div className="col-md-3">
                        <label for="jumlah" className="product-details-key mb-0">
                            Jumlah
                        </label>
                    </div>
                    <div className="col-md-9">
                        <input type="number" className="product-details-jumlah form-control"
                            name="jumlah" id="jumlah" placeholder="1" min="1" style={{height:"27px"}}/>
                    </div>
                </div>
                <div className="row align-items-center my-4">
                    <div className="col-md-12">
                        <button type="button" style={{marginRight:"10px"}}
                        className="btn-danger product-details-red-box" onClick={this.goToCheckout}>
                            Beli Sekarang
                        </button>
                        <button type="button" style={{marginLeft:"10px"}}
                        className="btn-outline-danger product-details-white-box">
                            Tambah Ke Keranjang
                        </button>
                    </div>
                </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12 product-details-key">
                Produk Unggulan Lain
            </div>
            <div className="col-md-12 mb-4">
                <ProductListWithImage/>
            </div>
          </div>
        </div>
        <ChatButton/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(ProductDetails));