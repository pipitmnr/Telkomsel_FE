import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/chatButton.css";
import { FaCommentAlt } from "react-icons/fa";

class ChatButton extends Component {

  render() {
    return (
       <React.Fragment>
           <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12">
                      <div className="chat-button">
                        <div className="btn btn-danger chat-button-red">
                          <div className="chat-button-icon"> <FaCommentAlt size={21}/> </div>
                        </div>
                      </div>
                    </div>
                </div>
           </div>
      </React.Fragment>
    );
  }
}

export default connect("", actions)(withRouter(ChatButton));
