import React from "react";
import {Table, Navbar, DropdownButton, Dropdown,Button, Row, Col, Container} from "react-bootstrap"

import './transaksi.css';


class Transactions extends React.Component{
    render(){
        return <React.Fragment>
    <Container fluid>
    <Row>
     <Col md="3" id="sidebar">
     
     </Col>
     <Col md= "8">
     <div id="transaksi">      
     <Navbar expand="lg" id="filter_one">
                <Navbar.Collapse>     
            <b>Filter</b> : &nbsp; <Dropdown>
                <DropdownButton className="d-inline-block align-center" title="Semua Status">
                    <Dropdown.Item href="">Terbayar</Dropdown.Item>
                    <Dropdown.Item href="">Gagal</Dropdown.Item>
                    <Dropdown.Item href="">Terkirim</Dropdown.Item>
                    <Dropdown.Item href="">Menunggu Pembayaran</Dropdown.Item>
                </DropdownButton>
                &nbsp;
                <DropdownButton className="d-inline-block align-center" title="Semua Kluster" variant="danger">
                    <Dropdown.Item href="">Kluster 1</Dropdown.Item>
                    <Dropdown.Item href="">Kluster 2</Dropdown.Item>
                    <Dropdown.Item href="">Kluster 3</Dropdown.Item>
                    <Dropdown.Item href="">Kluster 4</Dropdown.Item>
                </DropdownButton>
            </Dropdown>
            </Navbar.Collapse>   
            </Navbar>
       <Table striped bordered hover variant="white">
        <thead>
            <th>Nomor Pesanan</th>
            <th>Nama Pemesan</th>
            <th>Kota/Kecamatan Alamat</th>
            <th>Detail Pesanan</th>
            <th>Status</th>
        </thead>
        <tbody>
            <tr>
                <td>0000000001</td>
                <td>Yanto Basna</td>
                <td>Jl. Asemrawa Timur  no.5, 602822, Asemrawa, Surabaya</td>
                <td>Kartu Perdana Segel-5 Buah</td>
                <td><Button variant="success">Terbayar</Button></td>
            </tr>
        </tbody>
       </Table>
       </div> 
      </Col>
    </Row>
    </Container>
    </React.Fragment>

    }
    
};

export default Transactions;