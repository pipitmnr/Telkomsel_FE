import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import Header from '../components/header';
import Footer from "../components/footer";
import ProductListWithImage from "../components/productListWithImage";
import "../styles/home.css";
import '../styles/home.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChatButton from "../components/chatButton";

class Home extends Component {
  componentDidMount = async () => {};
  
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
      className: "slides"

    };
    
    return (
      <React.Fragment>
        <Header menuActive={this.props.location.pathname}/>
        <div className="header-white-space"></div>
        <div className="container-fluid px-0">
          <Slider {...settings}>
            <div className="carousel">
              <img style={{position:"relative"}}
                src="https://www.telkomsel.com/sites/default/files/banners/hero/desktop/BELAJAR-1200x480.jpg"
                alt="Credit to Joshua Earle on Unsplash"/>
              <div className="carousel-text-image">
                <h2 className="">DiRumahTerusBelajar</h2>
                <p>
                  Kami siap melayani di bulan suci dengan sepenuh hati didukung oleh jaringan terluas Telkomesl dan kualitas akses terbaik ke berbagai layanan e-learning agar #DirumahTerusBelajar.
                </p>
              </div>
            </div>
            <div className="carousel">
              <img 
                src="https://www.telkomsel.com/sites/default/files/banners/hero/desktop/BERBAGI-1200x480_1.jpg"
                alt="Credit to Alisa Anton on Unsplash"/>
              <div className="carousel-text-image">
                <h2 className="">DiRumahTerusBerbagi</h2>
                <p>
                  Kami siap melayani di bulan suci dengan sepenuh hati didukung oleh jaringan terluas Telkomesl dan kualitas akses terbaik ke berbagai layanan e-learning agar #DirumahTerusBelajar.
                </p>
              </div>
            </div>
            <div className="carousel">
              <img 
                src="https://www.telkomsel.com/sites/default/files/banners/hero/desktop/PRODUKTIF-1200x480.jpg"
                alt="Credit to Igor Ovsyannykov on Unsplash"/>
              <div className="carousel-text-image">
                <h2 className="">DiRumahTerusProduktif</h2>
                <p>
                  Kami siap melayani di bulan suci dengan sepenuh hati didukung oleh jaringan terluas Telkomesl dan kualitas akses terbaik ke berbagai layanan e-learning agar #DirumahTerusBelajar.
                </p>
              </div>
            </div>
            <div className="carousel">
              <img
                src="https://www.telkomsel.com/sites/default/files/banners/hero/desktop/SEHAT-07.jpg"
                alt="Credit to Pierre Châtel-Innocenti on Unsplash"/>
              <div className="carousel-text-image">
                <h2 className="">DiRumahTerusSehat</h2>
                <p>
                  Kami siap melayani di bulan suci dengan sepenuh hati didukung oleh jaringan terluas Telkomesl dan kualitas akses terbaik ke berbagai layanan e-learning agar #DirumahTerusBelajar.
                </p>
              </div>
            </div>
          </Slider>
          
          <div className="container">
            <div className="row align-items-center" style={{marginTop:"51px"}}>
              <div className="col-md-12 product-details-key">
                  Produk Unggulan
              </div>
              <div className="col-md-12 mb-4">
                  <ProductListWithImage/>
              </div>
            </div>
          </div>
        </div>
        <ChatButton/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(Home));
