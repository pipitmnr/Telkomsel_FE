import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { Button, Dropdown } from 'semantic-ui-react';
import { actions } from '../store';
import '../styles/sidebar.css';
import '../styles/titleAdmin.css';
import Sidebar from '../components/sidebar';
import TitlePage from '../components/titleAdmin';

const optionsItem = [
	{ key: 1, text: 'Semua Item', value: 'Semua Item' },
	{ key: 2, text: 'Item A', value: 'Item A' },
	{ key: 3, text: 'Item B', value: 'Item B' },
];
const optionsJenis = [
	{ key: 1, text: 'Semua Jenis', value: 'Semua Jenis' },
	{ key: 2, text: 'Jenis A', value: 'Jenis A' },
	{ key: 3, text: 'Jenis B', value: 'Jenis B' },
];
const optionsCluster = [
	{ key: 1, text: 'Semua Cluster', value: 'Semua Cluster' },
	{ key: 2, text: 'Cluster A', value: 'Cluster A' },
	{ key: 3, text: 'Cluster B', value: 'Cluster B' },
];
class DaftarCluster extends Component {
	componentDidMount = async () => {};
	state = {
		valueItem: 'Semua Item',
		valueJenis: 'Semua Jenis',
		valueCluster: 'Semua Cluster',
	};

	handleChangeItem = (e, { value }) => {
		console.log('cek value', value);
		this.setState({ valueItem: value });
	};
	handleChangeJenis = (e, { value }) => this.setState({ valueJenis: value });
	handleChangeCluster = (e, { value }) =>
		this.setState({ valueCluster: value });

	render() {
		return (
			<React.Fragment>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-3 col-sidebar'>
							<Sidebar />
						</div>
						<div className='col-md-9'>
							<div className='container'>
								<div className='row'>
									<TitlePage title={'Daftar Data Item'} />
								</div>
								<div className='row'>
									<div className='col-md-12 admin-filter'>
										<ul>
											<li>
												<Button content='Tambah Item' />
											</li>
											<li>
												<Dropdown
													onChange={this.handleChangeItem}
													options={optionsItem}
													selection
													value={this.state.valueItem}
												/>
											</li>
											<li>
												<Dropdown
													onChange={this.handleChangeJenis}
													options={optionsJenis}
													selection
													value={this.state.valueJenis}
												/>
											</li>
											<li>
												<Dropdown
													className='cluster'
													onChange={this.handleChangeCluster}
													options={optionsCluster}
													selection
													value={this.state.valueCluster}
												/>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default connect('', actions)(withRouter(DaftarCluster));
