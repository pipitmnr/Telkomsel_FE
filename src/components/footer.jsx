import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/footer.css";

class Footer extends Component {

  render() {
    return (
       <React.Fragment>
           <div className="container-fluid">
                <div className="row align-items-center footer">
                    <div className="col-md-12">
                        Copyright © 2020 Telkomsel
                    </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Footer));
