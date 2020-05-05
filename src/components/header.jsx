import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/header.css";

class Header extends Component {
  
  componentDidMount = async () => {
    
  };

  render() {
    return (
       <React.Fragment>
           <div className="container-fluid">
                <div className="row align-items-center header">
                    <div className="col-md-6">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Telkomsel_Logo.svg" className="headerLogo" alt=""/>
                    </div>
                    <div className="col-md-6">
                        <div className="header-menu">

                        </div>
                    </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Header));
