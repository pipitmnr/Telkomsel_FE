import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/chooseRegion.css";

class ChooseRegion extends Component {
    /**
     * The following method is used to transform regionName.json file into array
     */
    transformJson = () => {
        // Get all regions in Indonesia in JSON format
        let regionNameJson = require("../json/regionName.json");

        // Transform the JSON format into desired format
        let regionDetail = [];
        for (var index in regionNameJson) {
            let province = regionNameJson[index];
            let provinceName = Object.keys(province)[0];
            let cityList = province[provinceName];
            for (var cityIndex in cityList) {
                if (typeof cityList[cityIndex] === "object") {
                    let city = cityList[cityIndex];
                    let cityName = Object.keys(city)[0];
                    let villageList = city[cityName];
                    for (var villageIndex in villageList) {
                        regionDetail.push(villageList[villageIndex] + ", " + cityName + ", " + provinceName)
                    }
                } else {
                    regionDetail.push(cityList[cityIndex] + ", " + provinceName)
                }
            }
        }

        return regionDetail;
    }
    
    componentDidMount = async () => {
      
    };
  
    render() {
        // Get all formatted region in Indonesia
        let regionName = this.transformJson();

        // Define JSX variable which will provide datalist options
        let datalistOptions = regionName.map((region) => {
            return (
                <option value={region} />
            )
        })

        return (
            <React.Fragment>
                <div className="choose-region-container">
                    <span className="choose-region-title" >Pilih Daerah Anda</span>
                    <div className="choose-region-box">
                        <form className="form-inline">
                            <div className="form-group choose-region-form-container">
                                <label for="regionSearch"><span className="choose-region-label">Kota / Kecamatan</span></label>
                                <input id="regionSearch" list="regionName" type="text" className="choose-region-input" placeholder="Contoh: Jawa Timur, Kota Surabaya, Asemrowo"/>
                                <datalist id="regionName" className="choose-region-datalist">
                                    {datalistOptions}
                                </datalist>
                            </div>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
  }
  
export default connect("", actions)(withRouter(ChooseRegion));
  