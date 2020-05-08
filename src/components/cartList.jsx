import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/cartList.css";
import voucherTelkomsel from "../images/voucherTelkomselSecondVersion.png"

class CartList extends Component {
	componentDidMount = async () => {};

	render() {
        // Define the cart list variable to be looped
        let cartList = [
            {
                "image": voucherTelkomsel,
                "name": "Kartu Perdana Segel",
                "price": "Rp 15.000",
                "totalItem": 5,
                "totalPrice": "Rp75.000"
            },
            {
                "image": voucherTelkomsel,
                "name": "Perdana Paket Data",
                "price": "Rp 150.000",
                "totalItem": 5,
                "totalPrice": "Rp750.000"
            },
            {
                "image": voucherTelkomsel,
                "name": "Voucher Data",
                "price": "Rp 150.000",
                "totalItem": 5,
                "totalPrice": "Rp750.000"
            }
        ]

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
                                                        <img className="cart-list-product-image" src={product.image} alt="Voucher Telkomsel" />
                                                    </div>
                                                    <div className="col-12 col-md-4 cart-list-product-name-and-price">
                                                        <Link className="cart-list-no-underline" to={`/detail-produk`}>
                                                            <span className="cart-list-product-name">{product.name}</span>    
                                                        </Link>
                                                        <br />
                                                        <span className="cart-list-product-price">{product.price}</span>
                                                    </div>
                                                    <div className="col-12 col-md-2 cart-list-product-total-item-container">
                                                        <span className="cart-list-product-total-item-title">Jumlah</span><br />
                                                        <span className="cart-list-product-total-item">{product.totalItem}</span>
                                                        <div className="cart-list-underline"></div>
                                                    </div>
                                                    <div className="col-12 col-md-3 cart-list-product-total-item-container">
                                                        <span className="cart-list-product-total-item-title">Total</span><br />
                                                        <span className="cart-list-product-total-item">{product.totalPrice}</span>
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
