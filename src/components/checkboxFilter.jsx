import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/checkboxFilter.css";

class CheckboxFilter extends Component {
  
    /**
     * The following function is used to filter product list by name
     * 
     * @param {object} event The object returned from filter checkbox
     */
    handleFilter = async (event) => {
        // Get all products list and define some variables needed
        let checkedProp = event.target.name;
        let checkedValue = event.target.checked;
        let productList = require('../json/productList.json');
        let filterName = [];

        // Add "Perdana Segel" to filterName variable
        if ((checkedProp === "isPerdanaSegel" && checkedValue === true) || (checkedProp !== "isPerdanaSegel" && this.props.isPerdanaSegel === true)) {
            filterName.push("Perdana Segel")
        }

        // Add "Perdana Paket Data" to filterName variable
        if ((checkedProp === "isPerdanaPaketData" && checkedValue === true) || (checkedProp !== "isPerdanaPaketData" && this.props.isPerdanaPaketData === true)) {
            filterName.push("Perdana Paket Data")
        }

        // Add "Voucher Data" to filterName variable
        if ((checkedProp === "isVoucherData" && checkedValue === true) || (checkedProp !== "isVoucherData" && this.props.isVoucherData === true)) {
            filterName.push("Voucher Data")
        }

        // Filter process
        if (filterName.length > 0) {
            productList = productList.filter(function(product) {
                return filterName.includes(product["name"]);
            })
        }

        // Set some props
        store.setState({
            [event.target.name]: event.target.checked,
            productListWithImage: productList
        })
    }
    
    componentDidMount = async () => {
      
    };
  
    render() {
        return (
            <div className="checkbox-filter-container">
                <span className="checkbox-filter-title">Filter</span>
                <div className="checkbox-filter-box">
                    <div className="checkbox-filter-product-type">Jenis Produk</div>
                    <form onSubmit={(e) => e.preventDefault(e)}>
                        <div className="checkbox">
                            <label><input name="isPerdanaSegel" onChange={(e) => this.handleFilter(e)} className="checkbox-filter-format" type="checkbox" value="Perdana Segel"/>Perdana Segel</label>
                        </div>
                        <div className="checkbox">
                            <label><input name="isPerdanaPaketData" onChange={(e) => this.handleFilter(e)} className="checkbox-filter-format" type="checkbox" value="Perdana Paket Data"/>Perdana Paket Data</label>
                        </div>
                        <div className="checkbox">
                            <label><input name="isVoucherData" onChange={(e) => this.handleFilter(e)} className="checkbox-filter-format" type="checkbox" value="Voucher Data"/>Voucher Data</label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
  }
  
export default connect("isPerdanaSegel, isPerdanaPaketData, isVoucherData, productListWithImage", actions)(withRouter(CheckboxFilter));
  