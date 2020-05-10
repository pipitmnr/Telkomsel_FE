import React from 'react';
import {
	Table,
	DropdownButton,
	Dropdown,
	Button,
	Row,
	Col,
	Container,
	ButtonGroup
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { store, actions } from '../store';
import '../styles/transaksi.css';
import Sidebar from '../components/sidebar';
import transaksi from '../data/transaksi.json'
import Pagination from "../components/pagination"

class Transactions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {list_transaksi:transaksi};
	}

	ascOrder=(key)=>{
		transaksi.sort((a,b)=>{var newA=a[key].split('/').concat(),newB=b[key].split('/').concat();
		if (newA<newB){
			return -1
		}
	    if (newA>newB){
			return 0
		}})
		this.setState({list_transaksi:transaksi})

	}
	desOrder=(key)=>{
		transaksi.sort((a,b)=>{var newA=a[key].split('/').concat(),newB=b[key].split('/').concat();
		if (newA>newB){
			return -1
		}
	    })
		this.setState({list_transaksi:transaksi})
	}
	filterJenis=(stats)=>{
		if (stats==='Semua Jenis'){
			store.setState({filter_payment:stats})
			this.setState({list_transaksi: transaksi.filter(d=>{return d.status})})
		}else{
			store.setState({filter_payment:stats})
			this.setState({list_transaksi: transaksi.filter(d=>{return d.status===stats})})
		}
		
	}
	render() {
		return (
			<React.Fragment>
				<Container fluid className="all-transaksi">
					<Row>
						<Col md='3' className='col-sidebar'>
							<Sidebar />
						</Col>
						<Col md='9'>
							
							<div id='transaksi'>
							<h1>Transaksi Anda</h1>
							<br/>
								<Col id='filter_one'>
										<Dropdown>
										<b>Filter</b> : &nbsp;
											<DropdownButton
												id='bayar'
												className='d-inline-block align-center'
												title={this.props.filter_payment}
												variant=""
											>
												<Dropdown.Item
													as='button'
													onClick={event =>
														this.filterJenis('Terbayar')
													}
												>
													Terbayar
												</Dropdown.Item>
												<Dropdown.Item
													as='button'
													onClick={event =>
														this.filterJenis('Gagal')
													}
												>
													Gagal
												</Dropdown.Item>
												<Dropdown.Item
													as='button'
													onClick={event =>
														this.filterJenis('Terkirim')
													}
												>
													Terkirim
												</Dropdown.Item>
												<Dropdown.Item
													as='button'
													onClick={event =>
														this.filterJenis('Menunggu Pembayaran')
													}
												>
													Menunggu Bayar
												</Dropdown.Item>
												<Dropdown.Item
													as='button'
													onClick={event =>
														this.filterJenis('Semua Jenis')
													}
												>
													Semua Jenis
												</Dropdown.Item>
												
											</DropdownButton>
											&nbsp;
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
												>
													Semua Kluster
												</Dropdown.Item>
											</DropdownButton>
										</Dropdown>
									
								</Col>
								<br/>
								<Table  className="tabel-transaksi" striped bordered hover variant='white'>
									<thead>
										<th><Dropdown as={ButtonGroup}>
											<DropdownButton
												className='d-inline-block align-center'
												title="Nomor Pemesanan"
												variant="white"
											>
												<Dropdown.Item
													onClick={event=> this.ascOrder('nomor_pesanan')}
												>
													Ascending
												</Dropdown.Item>
												<Dropdown.Item
													onClick={event=> this.desOrder('nomor_pesanan')}
												>
													Descending
												</Dropdown.Item>
												</DropdownButton>
											</Dropdown></th>
										<th>Nama Pemesan</th>
										<th>Kota/Kecamatan Alamat</th>
										<th>Detail Pesanan</th>
										<th>Status</th>
									</thead>
									<tbody>
									{this.state.list_transaksi.map(row=>(
										<tr>
											<td>{row.nomor_pesanan}</td>
									        <td>{row.nama_pemesan}</td>
											<td>
												{row.alamat}
											</td>
									          <td>{row.detail_order}</td>
											<td>
												<Button variant={row.color}>{row.status}</Button>
											</td>
											
										</tr>))}
									</tbody>
								</Table>
								<Pagination/>
							</div>
							
						</Col>
					</Row>
					
				</Container>
			</React.Fragment>
		);
	}
}

export default connect(
	'filter_payment, filter_kluster',
	actions
)(withRouter(Transactions));
