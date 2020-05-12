import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/header.css";

class Header extends Component {

  render() {
    return (
       <React.Fragment>
           <div className="container-fluid">
                <div className="row align-items-center header">
                    <div className="col-md-6">
                        <Link to={`/`}>
                          <img src={require("../images/Telkomsel_Logo.svg")} className="header-logo" alt=""/>
                        </Link>
                    </div>
                    <div className="col-md-6">
                      <ul className="header-menu">
                        {this.props.menuActive === "/" ?
                          <li className="header-menu-active"><Link to={`/`}>Home</Link></li>
                          :
                          <li><Link to={`/`}>Home</Link></li>
                        }
                        {this.props.menuActive === "/belanja" || this.props.menuActive === "/detail-produk"
                          || this.props.menuActive === "/checkout"?
                          <li className="header-menu-active"><Link to={`/belanja`}>Belanja</Link></li>
                          :
                          <li><Link to={`/belanja`}>Belanja</Link></li>
                        }
                        {this.props.menuActive === "/info-produk" ?
                          <li className="header-menu-active"><Link>Info Produk Telkomsel</Link></li>
                          :
                          <li><Link>Info Produk Telkomsel</Link></li>
                        }
                      </ul>
                    </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Header));
