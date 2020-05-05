import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import Header from "../components/header";
import Footer from "../components/footer";

class Home extends Component {
  
  componentDidMount = async () => {
    
  };

  render() {
    return (
       <React.Fragment>
        <Header />
        <div className="container">
          halo
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(Home));
