import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/pageTitle.css";
import { FaShoppingCart } from "react-icons/fa";

class PageTitle extends Component {

  render() {
    return (
       <React.Fragment>
           <div className="container-fluid">
                <div className="row align-items-center page-title">
                    <div className="col-md-6 page-title-entry">
                        Voucher Paket Data
                    </div>
                    <div className="col-md-6">
                        <div className="row align-items-center">
                            <div className="col-md-7"></div>
                            <div className="col-md-5 text-center">
                                <div className="page-title-box">
                                    <div className="page-title-box-entry">
                                        <Link to="/checkout"> Belanjaan Kamu <FaShoppingCart/> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(PageTitle));
