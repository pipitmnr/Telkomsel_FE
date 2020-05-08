import React from "react"
import {Container,Row,Col, Table, Form, FormGroup, Button} from "react-bootstrap"
import "./transaksi.css"
import {connect} from "unistore/react"
import {store,actions} from "./store.js"
import {withRouter} from "react-router-dom"

class TransactionDetail extends React.Component{
    render (){
        return <React.Fragment>
            <Container>
                <Row className="big_detail">
                    <Col>
                      <Form>
                          <FormGroup>
                            <Form.Label>Tanggal Transaksi</Form.Label>
                            <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                          <FormGroup>
                            <Form.Label>Purchase Order</Form.Label>
                            <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                          <p>Informasi Pembeli</p>
                          <FormGroup>
                              <Form.Label>Nama Pembeli</Form.Label>
                              <Button  block diabled variant="secondary">|</Button>
                          </FormGroup>
                          <FormGroup>
                              <Form.Label>Nomor Telepon</Form.Label>
                              <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                          <FormGroup>
                              <Form.Label>Email</Form.Label>
                              <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                      </Form>
                      
                    </Col>
                    <Col>
                    <Form>
                          <FormGroup>
                            <Form.Label>Potongan</Form.Label>
                            <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                          <FormGroup>
                            <Form.Label>Total Penjualan</Form.Label>
                            <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                         <p>&nbsp;</p>
                          <FormGroup>
                              <Form.Label>Kota/Kecamatan</Form.Label>
                              <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                          <FormGroup>
                              <Form.Label>Alamat</Form.Label>
                              <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                          <FormGroup>
                              <Form.Label>Kode Pos</Form.Label>
                              <Button block diabled variant="secondary">|</Button>
                          </FormGroup>
                      </Form>
                    </Col>
                </Row>
                <br/>
                <h3>Detail Item Pembelian</h3><br/>
                <Row>
                    
                    <Col md="7">
                    <Table className="tabel-trans-satu" bordered>
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
                    <Button variant="primary">Kembali</Button>
                    </Col>
                    
                    &nbsp; &nbsp;
                    <Col md= "3">
                    <Table className="tabel-trans-dua" bordered>
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
                
            </Container>
            
        </React.Fragment>

    }
}

export default connect("",actions)(withRouter(TransactionDetail));
