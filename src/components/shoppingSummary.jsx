import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/shoppingSummary.css";

class ShoppingSummary extends Component {

  render() {
    return (
       <React.Fragment>
           <div className="shopping-summary-container container-fluid">
               <h6 className="shopping-summary-title">Ringkasan Pembelanjaan</h6>
               <div className="row">
                    <div className="col-6 shopping-summary-sent-by">
                        <div>Dikirim Oleh</div>
                        <div>Total Belanja</div>
                        <div>Biaya Shipping</div>
                        <div className="shopping-summary-divider">Potongan</div>
                        <div>Total Pembayaran</div>
                    </div>
                    <div className="col-6 shopping-summary-value">
                        <div><span className="shopping-summary-red-font">Nama Cluster</span></div>
                        <div>Rp. 75.000</div>
                        <div>Rp. 75.000</div>
                        <div className="shopping-summary-divider">Rp. 0</div>
                        <div>Rp. 75.000</div>
                    </div>
               </div>
               <div className="shopping-summary-payment-container">
                <button className="shopping-summary-method-payment">
                      Pilih Metode Pembayaran
                </button>
               </div>
           </div>
           <div className="shopping-summary-coupon-container container-fluid">
                <h6 className="shopping-summary-title">Punya Kupon?</h6>
                <div className="shopping-summary-payment-container">
                  <div className="shopping-summary-submit-coupon">
                      Masukkan Kupon
                  </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(ShoppingSummary));
