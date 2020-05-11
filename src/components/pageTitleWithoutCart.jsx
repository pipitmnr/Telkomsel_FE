import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/pageTitle.css";

class PageTitleWithoutCart extends Component {

  render() {
    return (
       <React.Fragment>
           <div className="container-fluid">
                <div className="row align-items-center page-title">
                    <div className="col-md-6 page-title-entry" style={{paddingRight: "95px"}}>
                        Keranjang Belanja
                    </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(PageTitleWithoutCart));
