import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';
import '../styles/bootstrap.min.css';
import '../styles/sidebar.css';
import TelkomselLogo from '../images/telkomsel-logo.png';

class Sidebar extends Component {
  componentDidMount = async () => {};

  handleLogout = () => {
    localStorage.removeItem('username');
  };

  render() {
    return (
      <React.Fragment>
        <img
          src={TelkomselLogo}
          className='sidebar-logo'
          alt=''
          style={{marginBottom: '40px'}}
        />
        <div
          className='nav flex-column nav-pills sidebar-menu'
          id='v-pills-tab'
          role='tablist'
          aria-orientation='vertical'
        >
          {localStorage.getItem('username') === 'pusat' ? (
            <Link className='manu-tab-sidebar' to={`/daftar-produk`}>
              <a
                className={
                  this.props.location.pathname === '/daftar-produk'
                    ? 'nav-link active'
                    : 'nav-link'
                }
                id='daftar-produk'
                data-toggle='pill'
                href='/'
                role='tab'
                aria-controls='v-pills-home'
                aria-selected='true'
              >
                Master Produk
              </a>
            </Link>
          ) : (
            <div></div>
          )}
          <Link className='manu-tab-sidebar' to={`/daftar-cluster`}>
            <a
              className={
                this.props.location.pathname === '/daftar-cluster'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              id='daftar-cluster'
              data-toggle='pill'
              href='/'
              role='tab'
              aria-controls='v-pills-home'
              aria-selected='true'
            >
              Master Data Cluster
            </a>
          </Link>
          <Link className='manu-tab-sidebar' to={`/daftar-transaksi`}>
            <a
              className={
                this.props.location.pathname === '/daftar-transaksi'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              id='daftar-transaksi'
              data-toggle='pill'
              href='/'
              role='tab'
              aria-controls='v-pills-profile'
              aria-selected='false'
            >
              Transaksi
            </a>
          </Link>
          <Link className='manu-tab-sidebar' to={`/laporan-penjualan`}>
            <a
              className={
                this.props.location.pathname === '/laporan-penjualan' ||
                this.props.location.pathname === '/detail-transaksi'
                  ? 'nav-link active'
                  : 'nav-link'
              }
              id='laporan-penjualan'
              data-toggle='pill'
              href='/'
              role='tab'
              aria-controls='v-pills-profile'
              aria-selected='false'
            >
              Laporan Penjualan
            </a>
          </Link>
          <Link className='manu-tab-sidebar' to={`/login-admin`}>
            <a
              className='nav-link'
              id='laporan-penjualan'
              data-toggle='pill'
              href='/'
              role='tab'
              aria-controls='v-pills-profile'
              aria-selected='false'
              onClick={this.handleLogout}
            >
              Logout
            </a>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(Sidebar));
