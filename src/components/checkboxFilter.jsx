import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/checkboxFilter.css";

class CheckboxFilter extends Component {
  
    componentDidMount = async () => {
      
    };
  
    render() {
        return (
            <div className="checkbox-filter-container">
                <span className="checkbox-filter-title">Filter</span>
                <div className="checkbox-filter-box">
                    <div className="checkbox-filter-product-type">Jenis Produk</div>
                    <form>
                        <div className="checkbox">
                            <label><input className="checkbox-filter-format" type="checkbox" value="Perdana Segel"/>Perdana Segel</label>
                        </div>
                        <div className="checkbox">
                            <label><input className="checkbox-filter-format" type="checkbox" value="Perdana Paket Data"/>Perdana Paket Data</label>
                        </div>
                        <div className="checkbox">
                            <label><input className="checkbox-filter-format" type="checkbox" value="Voucher Data"/>Voucher Data</label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
  }
  
export default connect("", actions)(withRouter(CheckboxFilter));
  