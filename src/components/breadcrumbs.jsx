import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/breadcrumbs.css";

class Breadcrumbs extends Component {

  render() {
    // Formatting the breadcumbers
    let breadcumbers = this.props.paths.map((content, index) => {
        if (index === 0) {
            return (
                <Link to={content.path}>
                    <span className="breadcrumbs-font">
                        {content.name}
                    </span>
                </Link>
            );
        } else {
            return (
                <React.Fragment>
                    <span>{" > "}</span>
                    <Link to={content.path}>
                        <span className="breadcrumbs-font">
                            {content.name}
                        </span>
                    </Link>
                </React.Fragment>
            );
        }
    })

    return (
       <React.Fragment>
           <div className="container-fluid">
                <div className="row align-items-center ">
                    <div className="col-md-12 breadcrumbs" style={{paddingLeft: this.props.paddingLeft}}>
                        {breadcumbers}
                    </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Breadcrumbs));
