import React from 'react';
import {
	Container,
	Row,
	Col,
	Table,
	Form,
	FormGroup,
	Button,
	Dropdown,
	DropdownButton
} from 'react-bootstrap';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import '../styles/transaksi.css';
import Sidebar from '../components/sidebar';
import itemBeli from "../data/beliItem.json"

class TransactionDetail extends React.Component {
	constructor(props){
		super(props)
		this.state={item:null, direction:null, arrow:null}
	}
	sortingOrder=(key)=>{
		if(this.state.direction===null|| this.state.direction==='descending'){
		itemBeli.sort((a,b)=>{var newA=a[key].split(/[./,-]+/).concat(),newB=b[key].split('/').concat();
		if (newA>newB){
			return -1
		}
	    })
		this.setState({item:itemBeli, direction:"ascending", arrow:"up"})
	    }else if(this.state.direction==="ascending"){
		itemBeli.sort((a,b)=>{var newA=a[key].split(/[./,-]+/).concat(),newB=b[key].split('/').concat();
		if (newA<newB){
			return -1
		}
		if (newA>newB){
			return 0
		}
	    })
		this.setState({item:itemBeli,direction:"descending", arrow:"down"})
	}
}
	render() {
		return (
			<React.Fragment>
				<Container fluid className="main-container">
					<Row>
						<Col md='3' className='col-sidebar'>
							<Sidebar />
						</Col>
						<Col md='9'>
						  <h1 className="title-page">Detail Transaksi</h1>
							<Col md='12' className='big_detail'>
								<Row>
									<Col>
										<Form>
											<FormGroup className="detail-inside-box">
												<Form.Label>Tanggal Transaksi</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													01/05/2020
												</Button>
											</FormGroup>
											<FormGroup className="detail-inside-box">
												<Form.Label>Purchase Order</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													PO XX/203/99
												</Button>
											</FormGroup>
											<p className="info-buyer"><b>Informasi Pembeli</b></p>
											<FormGroup className="detail-inside-box">
												<Form.Label>Nama Pembeli</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													Yanto Basna
												</Button>
											</FormGroup>
											<FormGroup className="detail-inside-box">
												<Form.Label>Nomor Telepon</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													087654XXXXX
												</Button>
											</FormGroup>
											<FormGroup className="detail-inside-box">
												<Form.Label>Email</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													yanto@email.id
												</Button>
											</FormGroup>
										</Form>
									</Col>

									<Col>
										<Form>
											<FormGroup id='upper-side'>
												<Form.Label>Potongan</Form.Label>
												<Button  className="not-active-btn" block disabled variant='secondary'>
													10%
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Total Penjualan</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													Rp 90.000
												</Button>
											</FormGroup>
										
											<FormGroup id='below-side'>
												<Form.Label>Kota/Kecamatan</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													Buleleng
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Alamat</Form.Label>
												<Button className="not-active-btn" block disabled variant='secondary'>
													Jl. Asemrawut 23
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Kode Pos</Form.Label>
												<Button className="not-active-btn" block disabled block variant='secondary'>
													402111
												</Button>
											</FormGroup>
										</Form>
									</Col>
								</Row>
							</Col>
							<Row>
								<Col xs={8} md={12}>
								<Row>
								  <Col xs={5} md={9}>
									<Table className='tabel-trans-satu' bordered>
										<thead>
											<th><Dropdown drop={this.state.arrow}>
											<Dropdown.Toggle
											    id="sort-transaction"
												title="nama_item"
												variant="white"
												onClick={event=>this.sortingOrder('nama')}
											>
												Nama Item
												</Dropdown.Toggle>
											</Dropdown></th>
											<th>Jumlah Pesanan</th>
											<th>Harga Per Item</th>
											<th>Total</th>
										</thead>
										<tbody>
											{itemBeli.map(row=>(
											<tr>
												<td>{row.nama}</td>
												<td>{row.jumlah}</td>
												<td>{row.price_item}</td>
												<td>{row.total}</td>
											</tr>))}
										</tbody>
									</Table>
									<Button className="back-button" variant='primary' href="/laporan-penjualan" size="lg">Kembali</Button>
								</Col>
								&nbsp; &nbsp;
								<Col xs={3} md={2}>
									<Table className='tabel-trans-dua' bordered>
										<thead>
											<th>Keterangan</th>
											<th>Total</th>
										</thead>
										<tbody>
											<tr>
												<td>Penjualan</td>
												<td>Rp 90.000</td>
											</tr>
											<tr>
												<td>Biaya Pengiriman</td>
												<td>Rp 15.000</td>
											</tr>
											<tr>
												<td>Potongan</td>
												<td>Rp 0</td>
											</tr>
											<tr>
												<td>Total Biaya</td>
												<td>Rp 105.000</td>
											</tr>
										</tbody>
									</Table>
								</Col>
								</Row>
							  </Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</React.Fragment>
		);
	}
}

export default connect('', actions)(withRouter(TransactionDetail));
