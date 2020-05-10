import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../components/header';
import Footer from "../components/footer";
import PageTitle from "../components/pageTitle";
import "../styles/productDetails.css";
import "../styles/contactUs.css";

class ContactUs extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <PageTitle pageTitle="Hubungi Kami"/>
        <div className="container-fluid font-muli">
            <div className="row">
                <div className="col-md-2 contact-us-gradient-red">
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-8">
                    <div className="contact-us-konten-form">
                        <h2 className="">Kami Selalu Mendengar Anda</h2>
                        <h3 className="">Silahkan mengisi form di bawah</h3>
                        <div className="contact-us-form">
                            <div className="row my-4">
                                <div className="col-md-6">
                                    <div className="row align-items-center">
                                        <div className="col-md-12 contact-us-label-form" >
                                            <label for="namaAnda" className="">
                                                Nama Anda
                                            </label>
                                            <input type="text" className="form-control"
                                                name="namaAnda" id="namaAnda"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-12 contact-us-label-form">
                                            <label for="nomorTelepon" className="">
                                                Nomor Telepon
                                            </label>
                                            <input type="text" className="form-control"
                                                name="nomorTelepon" id="nomorTelepon"/>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-12 contact-us-label-form">
                                            <label for="emailAnda" className="">
                                                Email Anda
                                            </label>
                                            <input type="email" className="form-control"
                                                name="emailAnda" id="emailAnda"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12 contact-us-label-form">
                                            <label for="pesanAnda" className="text-center">
                                                Pesan Anda
                                            </label>
                                            <textarea rows="5" type="text" className="form-control"
                                                name="pesanAnda" id="pesanAnda"/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 contact-us-label-form">
                                            <label></label>
                                            <button className="btn btn-danger contact-us-mini-button">Kirim</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-center mb-5">Atau</h2>
                        <div className="text-center">
                            <button className="btn btn-danger contact-us-big-button">
                                Chat dengan Customer Care Kami Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(ContactUs));