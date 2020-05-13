import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/cartList.css";
import voucherTelkomsel from "../images/voucherTelkomselSecondVersion.png"

class CartList extends Component {
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
    
    componentDidMount = async () => {};

	render() {
        // Define the cart list variable to be looped
        let cartList = require("../json/cartList.json");

		return (
			<React.Fragment>
				<div className="cart-list-container">
                    <span className="cart-list-title">Detail Barang</span>
                    <div className="container-fluid">
                        <div className="row">
                            {
                                cartList.map((product) => {
                                    return (
                                        <div className="col-12 cart-list-product-container">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-12 col-md-3 cart-list-product-image-container">
                                                        <img className="cart-list-product-image" src={voucherTelkomsel} alt="Voucher Telkomsel" />
                                                    </div>
                                                    <div className="col-12 col-md-4 cart-list-product-name-and-price">
                                                        <Link className="cart-list-no-underline" to={`/detail-produk`}>
                                                            <span className="cart-list-product-name">{product.name}</span>    
                                                        </Link>
                                                        <br />
                                                        <span className="cart-list-product-price">{this.convertToCurrency(product.price)}</span>
                                                    </div>
                                                    <div className="col-12 col-md-2 cart-list-product-total-item-container">
                                                        <span className="cart-list-product-total-item-title">Jumlah</span><br />
                                                        <span className="cart-list-product-total-item">{product.totalItem}</span>
                                                        <div className="cart-list-underline"></div>
                                                    </div>
                                                    <div className="col-12 col-md-3 cart-list-product-total-item-container">
                                                        <span className="cart-list-product-total-item-title">Total</span><br />
                                                        <span className="cart-list-product-total-item">{this.convertToCurrency(product.totalPrice)}</span>
                                                        <div className="cart-list-underline-type-2"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
			</React.Fragment>
		);
	}
}

export default connect('', actions)(withRouter(CartList));
