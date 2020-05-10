import React from 'react';
import {
	Container,
	Row,
	Col,
	Table,
	Form,
	FormGroup,
	Button,
} from 'react-bootstrap';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { withRouter } from 'react-router-dom';
import '../styles/transaksi.css';
import Sidebar from '../components/sidebar';

class TransactionDetail extends React.Component {
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
							<Col md='10' className='big_detail'>
								<Row>
									<Col>
										<Form>
											<FormGroup>
												<Form.Label>Tanggal Transaksi</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Purchase Order</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<p className="info-buyer"><b>Informasi Pembeli</b></p>
											<FormGroup>
												<Form.Label>Nama Pembeli</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Nomor Telepon</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Email</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
										</Form>
									</Col>

									<Col>
										<Form>
											<FormGroup>
												<Form.Label>Potongan</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Total Penjualan</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<p>&nbsp;</p>
											<FormGroup>
												<Form.Label>Kota/Kecamatan</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Alamat</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
											<FormGroup>
												<Form.Label>Kode Pos</Form.Label>
												<Button block diabled variant='secondary'>
													|
												</Button>
											</FormGroup>
										</Form>
									</Col>
								</Row>
							</Col>
							<Row>
								<Col md='7'>
									<Table className='tabel-trans-satu' bordered>
										<thead>
											<th>Nama Item</th>
											<th>Jumlah Pesanan</th>
											<th>Harge Per Item</th>
											<th>Total</th>
										</thead>
										<tbody>
											<tr>
												<td>Pulsa Segel</td>
												<td>2</td>
												<td>Rp 20.000</td>
												<td>Rp 40.000</td>
											</tr>
											<tr>
												<td>Data Paket</td>
												<td>3</td>
												<td>Rp 15.000</td>
												<td>Rp 45.000</td>
											</tr>
										</tbody>
									</Table>
									<Button className="back-button" variant='primary' href="/laporan-penjualan" size="lg">Kembali</Button>
								</Col>
								&nbsp; &nbsp;
								<Col md='3'>
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
				</Container>
			</React.Fragment>
		);
	}
}

export default connect('', actions)(withRouter(TransactionDetail));
