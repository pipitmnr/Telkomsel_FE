import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";
import "../styles/bootstrap.min.css";
import "../styles/checkoutForm.css";

/**
 * The following function is used to convert any string into Title case format
 */
String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

class CheckoutForm extends Component {
    /**
     * The following method is used to transform regionName.json file into array
     */
    formattingRegion = () => {
        // Get some JSON files needed and also define some variables
        let postalCode = require("../json/postalCode.json");
        let provinceArray = require("../json/provinceArray.json");
        let postalLength = postalCode.length;
        let initialProvinceIndex = 0;
        let initialProvinceCode = "11";
        let initialProvince = "ACEH";
        let regionDetail = [];

        // Process of getting the list of regions in Indonesia
        for (let index = 0; index < postalLength; index++) {
            let postalObject = postalCode[index];
            let cityName = postalObject["city"];
            let districtName = postalObject["sub_district"];
            if (initialProvinceCode !== postalObject["province_code"]) {
                initialProvinceIndex ++;
                initialProvinceCode = postalObject["province_code"]
                
                // Get province name
                initialProvince = provinceArray[initialProvinceIndex];
            }

            // Formatting the region
            let regionName = initialProvince + ", " + cityName + ", " + districtName;
            regionName = regionName.toProperCase();
            regionDetail.push(regionName);
        }

        // Return the result
        let distinctRegionName = [...new Set(regionDetail)];
        return distinctRegionName;
    }

    /**
     * The following function is used to filter product list by location
     * 
     * @param {object} event The object returned from city input form
     */
    handleChange = (event) => {
        store.setState({
            [event.target.name]: event.target.value,
        })
    }

    /**
     * The following function is used to get postal code
     * 
     * @param {string} location The location inputted in checkout form
     */
    getPostalCode = (location) => {
        if (location === null || location === undefined || location === "") {
            return [];
        }
        let locationArray = location.split(", ");
        let district = "";
        let city = "";

        if (locationArray.length >= 3) {
            district = locationArray[2].toLocaleUpperCase();
            city = locationArray[1].toLocaleUpperCase();
        }

        let postalCodeList = [];
        let postalCode = require("../json/postalCode.json");
        let relatedPostalCode = postalCode.filter(function(postalObject) {
            return (postalObject["sub_district"] === district) && (postalObject["city"] === city);
        });
        for (let postalIndex in relatedPostalCode) {
            postalCodeList.push(relatedPostalCode[postalIndex]["postal_code"])
        }
        let distinctPostal = [...new Set(postalCodeList)];
        return distinctPostal;
    }

  componentDidMount = async () => {
    let postalCode = localStorage.getItem("location");
    store.setState({
        checkoutLocation: postalCode
    })
  };

  render() {
    // Get all formatted region and postal code in Indonesia
    let regionName = this.formattingRegion();
    let postalCodeList = this.getPostalCode(this.props.checkoutLocation);

    // Define JSX variable which provide datalist options
    let datalistOptions = regionName.map((region) => {
        return (
            <option value={region} />
        )
    })

    // Define JSX varibale which provide related postal code
    let postalCodeJsx = postalCodeList.map((postal) => {
        return (
            <option value={postal}>{postal}</option>
        )
    });

    return (
        <React.Fragment>
            <div className="checkout-form-container">
                <span className="checkout-form-title">Masukkan Alamat Pengiriman Anda</span>
                <form onSubmit={(e) => this.preventDefault(e)} className="checkout-form">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-11 col-12">
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-md-6 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="receiverName">
                                                    <span className="checkout-form-label">Nama Penerima</span>
                                                    <input id="receiverName" className="checkout-input-type-1 form-control" type="text"/>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="phoneNumber">
                                                    <span className="checkout-form-label">Nomor Telepon</span>
                                                    <input id="phoneNumber" className="checkout-input-type-1 form-control" type="text"/>
                                                    <span className="checkout-phone-example">Contoh: 012345678910</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-9 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="city">
                                                    <span className="checkout-form-label">Kota atau Kecamatan</span>
                                                    <input value={this.props.checkoutLocation} name="checkoutLocation" onChange={(e) => this.handleChange(e)} list="regionName" id="city" placeholder="Tulis nama alamat / kota / kecamatan tujuan pengiriman" className="checkout-input-type-2 form-control datalist-input" />
                                                    <datalist id="regionName" className="choose-region-datalist">
                                                        {datalistOptions}
                                                    </datalist>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="postalCode">
                                                    <span className="checkout-form-label">Kode Pos</span>
                                                    <select name="postalCode" id="postalCode" className="checkout-input-type-3 form-control datalist-input" > 
                                                        {postalCodeJsx}
                                                    </select>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12 checkout-form-type-1">
                                            <div className="form-group">
                                                <label for="address">
                                                    <span className="checkout-form-label">Alamat</span>
                                                    <textarea rows="3" id="address" placeholder="Isi dengan nama jalan, nomor rumah, nomor kompleks, nama gedung, lantai, atau nomor unit" className="checkout-input-type-4 form-control"/>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
  }
}

export default connect("checkoutLocation, postalCode", actions)(withRouter(CheckoutForm));
