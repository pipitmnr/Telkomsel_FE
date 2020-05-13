import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/shoppingSummary.css";

class ShoppingSummary extends Component {
  /**
     * The following method is used to formatting number into currency
     * 
     * @param {int} money The amount that will be converted in currency format
     */
    convertToCurrency = (money) => {
      // Convert to string
      let moneyString = money.toString(10);
      let currency = "Rp. ";
      let moneyLength = moneyString.length;
      let moneyArray = moneyString.split("");
      
      //  Converting process
      if (moneyLength % 3 === 0) {
          for (let index in moneyArray) {
              if (index % 3 === 0 && index > 0) {
                  currency = currency + "." + moneyArray[index];
              } else {
                  currency = currency + moneyArray[index];
              }
          }
      } else if (moneyLength % 3 === 1) {
          for (let index in moneyArray) {
              if (index % 3 === 1) {
                  currency = currency + "." + moneyArray[index];
              } else {
                  currency = currency + moneyArray[index];
              }
          }
      } else {
          for (let index in moneyArray) {
              if (index % 3 === 2) {
                  currency = currency + "." + moneyArray[index];
              } else {
                  currency = currency + moneyArray[index];
              }
          }
      }

      return currency;
  };

  render() {
    // Get total price of the product in carts
    let productInCart = this.props.productInCart;
    let totalPrice = 0;
    for (let productIndex in productInCart) {
      totalPrice = totalPrice + productInCart[productIndex]["price"];
    }
    let totalPay = totalPrice - this.props.discount + this.props.shippingPrice;

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
                        <div>{this.convertToCurrency(totalPrice)}</div>
                        <div>{this.convertToCurrency(this.props.shippingPrice)}</div>
                        <div className="shopping-summary-divider">{this.convertToCurrency(this.props.discount)}</div>
                        <div>{this.convertToCurrency(totalPay)}</div>
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

export default connect("productInCart, shippingPrice, discount", actions)(withRouter(ShoppingSummary));
