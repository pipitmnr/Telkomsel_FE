import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import {
	Button,
	Dropdown,
	Table,
	Checkbox,
	Pagination,
} from 'semantic-ui-react';
import { actions } from '../store';
import '../styles/sidebar.css';
import '../styles/daftarDataCluster.css';
import Sidebar from '../components/sidebar';
import TitlePage from '../components/titleAdmin';

const totalList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
							<div className='container'>
								<div
									className='row tabel-data-cluster'
									style={{ padding: '20px 30px' }}
								>
									<Table basic='very'>
										<Table.Header>
											<Table.Row className='thead-col'>
												<Table.HeaderCell>
													<Checkbox label={<label>No SKU</label>} />
												</Table.HeaderCell>
												<Table.HeaderCell>Nama Produk</Table.HeaderCell>
												<Table.HeaderCell>Tipe Produk</Table.HeaderCell>
												<Table.HeaderCell>Harga Produk</Table.HeaderCell>
												<Table.HeaderCell>Sisa Stok</Table.HeaderCell>
												<Table.HeaderCell>User</Table.HeaderCell>
												<Table.HeaderCell></Table.HeaderCell>
												<Table.HeaderCell></Table.HeaderCell>
											</Table.Row>
										</Table.Header>

										<Table.Body>
											{totalList.map((value, index) => {
												return (
													<Table.Row>
														<Table.Cell>
															<Checkbox label={<label>7881218218</label>} />
														</Table.Cell>
														<Table.Cell>Perdana Segel No Cantik</Table.Cell>
														<Table.Cell>Perdana Segel</Table.Cell>
														<Table.Cell>Rp 15.000</Table.Cell>
														<Table.Cell>15</Table.Cell>
														<Table.Cell>Aditya</Table.Cell>
														<Table.Cell>:</Table.Cell>
														<Table.Cell></Table.Cell>
													</Table.Row>
												);
											})}
										</Table.Body>
									</Table>
								</div>
							</div>
							<div className='container pagination-cluster'>
								<div className='row'>
									<Pagination defaultActivePage={5} totalPages={10} />
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
