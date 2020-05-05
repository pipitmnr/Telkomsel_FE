import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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
                        <img src={require("../images/Telkomsel_Logo.svg")} className="header-logo" alt=""/>
                    </div>
                    <div className="col-md-6">
                      <ul className="header-menu">
                        {this.props.menuActive === "/" ?
                          <li className="header-menu-active"> <a href="/"> Home </a></li>
                          :
                          <li> <a href="/"> Home </a></li>
                        }
                        {this.props.menuActive === "/belanja" ?
                          <li className="header-menu-active"> <a href="/"> Belanja </a></li>
                          :
                          <li> <a href="/belanja"> Belanja </a></li>
                        }
                        {this.props.menuActive === "/info-produk" ?
                          <li className="header-menu-active"> <a href="/"> Info Produk Telkomsel </a></li>
                          :
                          <li> <a href="/info-produk"> Info Produk Telkomsel </a></li>
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
