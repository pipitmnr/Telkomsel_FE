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
import data from "../data/produk.json"

class LaporanJual extends React.Component {
	constructor(props) {
		super(props);
		this.state = { dates_first: 'tanggal awal', dates_last: 'tanggal akhir', datas:data};
	}

	ascending=(key)=>{
		data.sort((a,b)=>a[key]-b[key])
        this.setState({datas:data})
	}
	descending=(key)=>{
		data.sort((a,b)=>b[key]-a[key])
		this.setState({datas: data})
	}

	dateSortA=(key)=>{
		data.sort((a,b)=>{var dateA = a[key].split('/'), dateB = b[key].split('/');
		return new Date(dateA[2],dateA[1],dateA[0]) - new Date(dateB[2],dateB[1],dateB[0])})
		this.setState({datas:data})

	}
	dateSortD=(key)=>{
		data.sort((a,b)=>{var dateA = a[key].split('/'), dateB = b[key].split('/');
		return new Date(dateB[2],dateB[1],dateB[0]) - new Date(dateA[2],dateA[1],dateA[0])})
		this.setState({datas:data})
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
						<Col sm='3' className='col-sidebar'>
							<Sidebar />
						</Col>
						
						<Col sm='9' className='kluster'>
						<Row>

							<Col md="8">
							<h1>Laporan Penjualan</h1>
                            </Col>
						
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
									<Dropdown.Item
										href=''
										onClick={() =>
											store.setState({ filter_kluster: 'Semua Kluster' })
										}
									>Semua Kluster</Dropdown.Item>
								</DropdownButton>
							</Row>
							<Row className='baris'>
								<div className='two-button'>
									<p>
										<b>Pilih Tanggal</b>
									</p>
									<Col md='1'>
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
									<Col md='1'>
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
												<Dropdown.Item
													onClick={() =>
														store.setState({ filter_payment: 'Semua Jenis' })
													}
												>
													Semua Jenis
												</Dropdown.Item>
											</DropdownButton>
										</Dropdown>
									</Col>
								</div>
								<div className='one-button'>
									<Col>
										<p>Total Transaksi</p>
										<h2>Rp {this.state.datas.reduce(function(accumulator,d){return accumulator+d.total_penjualan},0)}</h2>
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
										<th><Dropdown as={ButtonGroup}>
											<DropdownButton
												className='d-inline-block align-center'
												title="Tanggal Pemesanan"
												variant="white"
											>
												<Dropdown.Item
													onClick={event=> this.dateSortA('tanggal_transaksi')}
												>
													Ascending
												</Dropdown.Item>
												<Dropdown.Item
													onClick={event=> this.dateSortD('tanggal_transaksi')}
												>
													Descending
												</Dropdown.Item>
												</DropdownButton>
											</Dropdown></th>
										<th>Nomor Pesanan</th>
										<th><Dropdown as={ButtonGroup}>
											<DropdownButton
												className='d-inline-block align-center'
												title="Total Transaksi"
												variant="white"
											>
												<Dropdown.Item
													onClick={event=> this.ascending('total_penjualan')}
												>
													Ascending
												</Dropdown.Item>
												<Dropdown.Item
													onClick={event=> this.descending('total_penjualan')}
												>
													Descending
												</Dropdown.Item>
												</DropdownButton>
											</Dropdown></th>
										<th>Status Transaksi</th>
										<th>Detail Transaksi</th>
									</thead>
									<tbody>
										{this.state.datas.map(row=>(
										<tr>
											<td>{row.tanggal_transaksi}</td>
											<td>{row.nomor_pesanan}</td>
											<td>Rp {row.total_penjualan}</td>
											<td>
												<Button variant={row.color}>{row.status_transaksi}</Button>
											</td>
											<td>
												<a className='dots' href='/detail-transaksi'>
													<i class='fa fa-ellipsis-v'></i>
												</a>
											</td>
										</tr>))}
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
	'filter_payment,filter_kluster, datas',
	actions
)(withRouter(LaporanJual));
