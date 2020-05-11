import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/chooseRegion.css";

/**
 * The following function is used to convert any string into Title case format
 */
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

class ChooseRegion extends Component {
    
    /**
     * The following function is used to filter product list by location
     * 
     * @param {object} event The object returned from filter checkbox
     */
    handleFilter = async (event) => {
        // Define some variables needed
        let productList = require('../json/productList.json');
        let filterName = [];
        let filterLocation = event.target.value;

        // Filter by location
        if (filterLocation !== "") {
            productList = productList.filter(function(product) {
                return product["location"].toLowerCase().search(filterLocation.toLowerCase()) >= 0;
            })
        }

        // Get filter by name indicator
        if (this.props.isPerdanaSegel === true) {
            filterName.push("Perdana Segel")
        }

        if (this.props.isPerdanaPaketData === true) {
            filterName.push("Perdana Paket Data")
        }

        if (this.props.isVoucherData === true) {
            filterName.push("Voucher Data")
        }

        // Filter by name
        if (filterName.length > 0) {
            productList = productList.filter(function(product) {
                return filterName.includes(product["name"]);
            })
        }

        // Set some props
        store.setState({
            [event.target.name]: event.target.value,
            productListWithImage: productList
        })
    }
    
    /**
     * The following method is used to transform regionName.json file into array
     */
    formattingRegion = () => {
        // Get all regions in Indonesia in JSON format and define some variables
        let regionNameJson = require("../json/masterRegion.json");
        let regionDetail = [];
        let regionLength = regionNameJson.length;
        let province = "";
        let city = "";

        // Formatting the JSON into array of string
        for (let index = 0; index < regionLength; index++) {
            let regionObject = regionNameJson[index];
            
            // Processing reion object at province level
            if (regionObject["level"] === 1) {
                province = regionObject["nama"].slice(6).toProperCase();
                // Special cases for Jakarta and Yogyakarta
                if (province === "D.k.i. Jakarta") {
                    province = "D.K.I. Jakarta";
                } else if (province === "D.i. Yogyakarta") {
                    province = "D.I. Yogyakarta";
                }
            }

            // Processing reion object at city level
            if (regionObject["level"] === 2) {
                city = regionObject["nama"].toProperCase();
            }

            // Processing reion object at district level
            if (regionObject["level"] === 3) {
                let regionName = regionObject["nama"].toProperCase() + ", " + city + ", " + province;
                regionDetail.push(regionName);
            }
        }

        // Return the result
        return regionDetail;
    }
    
    componentDidMount = async () => {
      
    };
  
    render() {
        // Get all formatted region in Indonesia
        let regionName = this.formattingRegion();

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
                                <input name="locationSearch" onChange={(e) => this.handleFilter(e)} id="regionSearch" list="regionName" type="text" className="choose-region-input" placeholder="Contoh: Jawa Timur, Kota Surabaya, Asemrowo"/>
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
  
export default connect("productListWithImage, isPerdanaSegel, isPerdanaPaketData, isVoucherData, locationSearch", actions)(withRouter(ChooseRegion));
  