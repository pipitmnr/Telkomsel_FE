import React from 'react';
import {
	ButtonGroup,
	Dropdown,
	DropdownButton,
	Container,
	Row,
	Col,
	Button,
	Table,
} from 'react-bootstrap';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import { withRouter } from 'react-router-dom';
import '../styles/transaksi.css';
import Sidebar from '../components/sidebar';

class LaporanJual extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dates_first: 'tanggal awal', dates_last: 'tanggal akhir' };
	}
	render() {
		return (
			<React.Fragment>
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
				></link>

				<Container fluid>
					<Row>
						<Col md='3' className='col-sidebar'>
							<Sidebar />
						</Col>
						<Col md='9' className='kluster'>
							<h1>Detail Transaksi</h1>

							<Row>
								<DropdownButton
									className='d-inline-block align-center'
									title={this.props.filter_kluster}
									variant='danger'
								>
									<Dropdown.Item
										href=''
										onClick={() =>
											store.setState({ filter_kluster: 'Kluster 1' })
										}
									>
										Kluster 1
									</Dropdown.Item>
									<Dropdown.Item
										href=''
										onClick={() =>
											store.setState({ filter_kluster: 'Kluster 2' })
										}
									>
										Kluster 2
									</Dropdown.Item>
									<Dropdown.Item
										href=''
										onClick={() =>
											store.setState({ filter_kluster: 'Kluster 3' })
										}
									>
										Kluster 3
									</Dropdown.Item>
									<Dropdown.Item
										href=''
										onClick={() =>
											store.setState({ filter_kluster: 'Kluster 4' })
										}
									>
										Kluster 4
									</Dropdown.Item>
								</DropdownButton>
							</Row>
							<Row className='baris'>
								<div className='two-button'>
									<p>
										<b>Pilih Tanggal</b>
									</p>
									<Col md='2'>
										<Dropdown as={ButtonGroup}>
											<DropdownButton
												className='d-inline-block align-center'
												title={this.state.dates_first}
											>
												<Dropdown.Item
													onClick={() =>
														this.setState({ dates_first: '1/2/2020' })
													}
												>
													1/2/2020
												</Dropdown.Item>
											</DropdownButton>
											<p> &nbsp;Hingga&nbsp; </p>

											<DropdownButton
												className='d-inline-block align-center'
												title={this.state.dates_last}
											>
												<Dropdown.Item
													onClick={() =>
														this.setState({ dates_last: '10/2/2020' })
													}
												>
													10/2/2020
												</Dropdown.Item>
											</DropdownButton>
										</Dropdown>
									</Col>
								</div>
								<div className='one-button-dropdown'>
									<p>
										<b>Status</b>
									</p>
									<Col md='2'>
										<Dropdown as={ButtonGroup}>
											<DropdownButton
												className='d-inline-block align-center'
												title={this.props.filter_payment}
											>
												<Dropdown.Item
													onClick={() =>
														store.setState({ filter_payment: 'Terbayar' })
													}
												>
													Terbayar
												</Dropdown.Item>
												<Dropdown.Item
													onClick={() =>
														store.setState({ filter_payment: 'Terkirim' })
													}
												>
													Terkirim
												</Dropdown.Item>
												<Dropdown.Item
													onClick={() =>
														store.setState({ filter_payment: 'Gagal' })
													}
												>
													Gagal
												</Dropdown.Item>
												<Dropdown.Item
													onClick={() =>
														store.setState({ filter_payment: 'Menunggu Bayar' })
													}
												>
													Menunggu Bayar
												</Dropdown.Item>
											</DropdownButton>
										</Dropdown>
									</Col>
								</div>
								<div className='one-button'>
									<Col>
										<p>Total Transaksi</p>
										<h2>Rp. 1.500.000</h2>
									</Col>
								</div>
							</Row>
							<Row className='baris'>
								<Table
									className='tabel-satu'
									striped
									bordered
									hover
									variant='white'
									size='sm'
								>
									<thead>
										<th>Tanggal Pemesanan</th>
										<th>Nomor Pesanan</th>
										<th>Total Penjualan</th>
										<th>Status Transaksi</th>
										<th>Detail Transaksi</th>
									</thead>
									<tbody>
										<tr>
											<td>01/02/2020</td>
											<td>0000000001</td>
											<td>Rp 150.000</td>
											<td>
												<Button variant='success'>Terbayar</Button>
											</td>
											<td>
												<a className='dots' href='/detail-transaksi'>
													<i class='fa fa-ellipsis-v'></i>
												</a>
											</td>
										</tr>
									</tbody>
								</Table>
							</Row>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default connect(
	'filter_payment,filter_kluster',
	actions
)(withRouter(LaporanJual));
