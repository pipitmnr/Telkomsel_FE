import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/cartList.css";
import voucherTelkomsel from "../images/voucherTelkomselSecondVersion.png"
import { AiFillDelete } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import { AiFillMinusCircle } from "react-icons/ai";

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

    /**
     * The following method is used to add or substratc the number of an item from cart
     * 
     * @param {int} amount The amount that will be added (or substracted if the value is less than zero) to the number 
     * of an item
     * @param {int} index Index (in this context is the order) of the product in cart list
     */
    addOrSubstract = async (index, amount) => {
        let cartList = Array.from(this.props.productInCart);
        let newAmount = cartList[index]["totalItem"] + amount;
        if (newAmount >= 0) {
            cartList[index]["totalItem"] = newAmount;
        }
        store.setState({
            productInCart: cartList
        })
    };

    /**
     * The following methdo is used to remove an item from cart list
     * 
     * @param {int} index Index (in this context is the order) of the product in cart list
     */
    removeItem = (index) => {
        let cartList = Array.from(this.props.productInCart);
        cartList = cartList.filter(function(product, key) {
            return key !== index;
        })
        store.setState({
            productInCart: cartList
        })
    }
    
    componentDidMount = async () => {};

	render() {
        // Define the cart list variable to be looped
        let cartList = this.props.productInCart;
        let cartLength = cartList.length;

		return (
			<React.Fragment>
				<div className="cart-list-container">
                    <span className="cart-list-title">Detail Barang</span>
                    <div className="container-fluid">
                        <div className="row">
                            {
                                cartLength === 0?
                                <span style={{fontSize: "16px", fontWeight: "bold"}}>Kamu belum menambahkan apapun ke dalam keranjang</span>:
                                <span></span>
                            }
                            {
                                cartList.map((product, index) => {
                                    return (
                                        <div className="col-12 cart-list-product-container">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    
                                                    <div className="col-12 col-md-3 cart-list-product-image-container">
                                                        <AiFillDelete onClick={() => this.removeItem(index)} className="cart-list-remove-icon hover-effect" />
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
                                                        <AiFillMinusCircle onClick={() => this.addOrSubstract(index, -1)} className="cart-list-minus-icon hover-effect" />
                                                        <div className="cart-list-product-total-item">{product.totalItem}</div>
                                                        <FcPlus onClick={() => this.addOrSubstract(index, 1)} className="cart-list-plus-icon hover-effect" />
                                                        <div className="cart-list-underline"></div>
                                                    </div>
                                                    <div className="col-12 col-md-3 cart-list-product-total-item-container">
                                                        <span className="cart-list-product-total-item-title">Total</span><br />
                                                        <div className="cart-list-product-total-item">{this.convertToCurrency(product.totalItem * product.price)}</div>
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

export default connect('productInCart', actions)(withRouter(CartList));
