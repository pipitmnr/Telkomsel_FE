import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/checkoutForm.css";

class CheckoutForm extends Component {
  
  componentDidMount = async () => {
    
  };

  render() {
    return (
        <React.Fragment>
            <div className="checkout-form-container">
                <span className="checkout-form-title">Masukkan Alamat Pengiriman Anda</span>
                <form className="checkout-form">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-11 col-12">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="receiverName">
                                                    <span className="checkout-form-label">Nama Penerima</span>
                                                    <input id="receiverName" className="checkout-input-type-1" type="text"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="phoneNumber">
                                                    <span className="checkout-form-label">Nomor Telepon</span>
                                                    <input id="phoneNumber" className="checkout-input-type-1" type="text"/>
                                                    <span className="checkout-phone-example">Contoh: 012345678910</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-9 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="city">
                                                    <span className="checkout-form-label">Kota atau Kecamatan</span>
                                                    <input id="city" placeholder="Tulis nama alamat / kota / kecamatan tujuan pengiriman" className="checkout-input-type-2" type="text"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="postalCode">
                                                    <span className="checkout-form-label">Kode Pos</span>
                                                    <input readOnly id="postalCode" placeholder="Kode Pos" className="checkout-input-type-1 checkout-readonly" type="text"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="address">
                                                    <span className="checkout-form-label">Alamat</span>
                                                    <textarea id="address" placeholder="Isi dengan nama jalan, nomor rumah, nomor kompleks, nama gedung, lantai, atau nomor unit" className="checkout-input-type-3"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(CheckoutForm));
