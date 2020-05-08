import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
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
					style={{ marginBottom: '40px' }}
				/>
				<div
					className='nav flex-column nav-pills sidebar-menu'
					id='v-pills-tab'
					role='tablist'
					aria-orientation='vertical'
				>
					{localStorage.getItem('username') === 'pusat' ? (
						<a
							className={
								this.props.location.pathname === '/daftar-produk'
									? 'nav-link active'
									: 'nav-link'
							}
							id='daftar-produk'
							data-toggle='pill'
							href='/daftar-produk'
							role='tab'
							aria-controls='v-pills-home'
							aria-selected='true'
						>
							Master Produk
						</a>
					) : (
						<div></div>
					)}

					<a
						className={
							this.props.location.pathname === '/daftar-cluster'
								? 'nav-link active'
								: 'nav-link'
						}
						id='daftar-cluster'
						data-toggle='pill'
						href='/daftar-cluster'
						role='tab'
						aria-controls='v-pills-home'
						aria-selected='true'
					>
						Master Data Cluster
					</a>
					<a
						className={
							this.props.location.pathname === '/daftar-transaksi'
								? 'nav-link active'
								: 'nav-link'
						}
						id='daftar-transaksi'
						data-toggle='pill'
						href='/daftar-transaksi'
						role='tab'
						aria-controls='v-pills-profile'
						aria-selected='false'
					>
						Transaksi
					</a>
					<a
						className={
							this.props.location.pathname === '/laporan-penjualan' ||
							this.props.location.pathname === '/detail-transaksi'
								? 'nav-link active'
								: 'nav-link'
						}
						id='laporan-penjualan'
						data-toggle='pill'
						href='/laporan-penjualan'
						role='tab'
						aria-controls='v-pills-profile'
						aria-selected='false'
					>
						Laporan Penjualan
					</a>
					<a
						className='nav-link'
						id='laporan-penjualan'
						data-toggle='pill'
						href='/login-admin'
						role='tab'
						aria-controls='v-pills-profile'
						aria-selected='false'
						onClick={this.handleLogout}
					>
						Logout
					</a>
				</div>
			</React.Fragment>
		);
	}
}

export default connect('', actions)(withRouter(Sidebar));
