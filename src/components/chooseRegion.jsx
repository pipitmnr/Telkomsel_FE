import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/chooseRegion.css";

class ChooseRegion extends Component {
  
    componentDidMount = async () => {
      
    };
  
    render() {
        return (
            <React.Fragment>
                <div className="choose-region-container">
                    <span className="choose-region-title" >Pilih Daerah Anda</span>
                    <div className="choose-region-box">
                        <form className="form-inline">
                            <div className="form-group choose-region-form-container">
                                <label for="regionSearch"><span className="choose-region-label">Kota / Kecamatan</span></label>
                                <input id="regionSearch" type="text" className="choose-region-input" placeholder="Contoh: Jawa Timur, Kota Surabaya, Asemrowo"/>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
  }
  
export default connect("", actions)(withRouter(ChooseRegion));
  