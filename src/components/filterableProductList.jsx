import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { store, actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/productListWithImage.css";
import voucherTelkomsel from "../images/voucherTelkomsel.jpg";

class FilterableProductList extends Component {
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
                <Link to={'/detail-produk'}>
                    <img src={voucherTelkomsel} alt={product.name} className="product-list-with-image-image"/>
                </Link>
                <div className="product-list-with-image-product-info">
                    <Link to={'/detail-produk'} className="product-list-with-image-formatting-link">
                        <span className="prouct-list-with-image-span-name">{product.name}</span>
                    </Link>
                    <br />
                    <span className="prouct-list-with-image-span-price">{this.convertToCurrency(product.price)}</span>
                </div>
                {
                    index % 4 === 0 ?
                    <span></span>:
                    <div className="product-list-with-image-line"></div>
                }
                <div className="product-list-with-image-dummy-div-1"></div>
                <div className="product-list-with-image-dummy-div-2"></div>
                <div className="product-list-with-image-dummy-div-3"></div>
                <div className="product-list-with-image-dummy-div-4"></div>
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
