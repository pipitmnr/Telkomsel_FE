import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Header from "../components/header";

class Home extends Component {
  
  componentDidMount = async () => {
  };

  render() {
    return (
       <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <div className="container">
          halo
        </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Home));
