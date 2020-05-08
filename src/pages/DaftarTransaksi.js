import React from "react";
import {Table, Navbar, DropdownButton, Dropdown,Button, Row, Col, Container} from "react-bootstrap"
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import {store,actions} from "../store"
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
            <DropdownButton id='bayar' className="d-inline-block align-center" title={this.props.filter_payment}>
                    <Dropdown.Item  as="button" onClick={()=>store.setState({filter_payment:"Terbayar"})}>Terbayar</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={()=>store.setState({filter_payment:"Gagal"})}>Gagal</Dropdown.Item>
                    <Dropdown.Item  as="button" onClick={()=>store.setState({filter_payment:"Terkirim"})}>Terkirim</Dropdown.Item>
                    <Dropdown.Item  as="button" onClick={()=>store.setState({filter_payment:"Menunggu Bayar"})}>Menunggu Bayar</Dropdown.Item>
                </DropdownButton>
                &nbsp;
                <DropdownButton className="d-inline-block align-center" title={this.props.filter_kluster} variant="danger">
                    <Dropdown.Item href="" onClick={()=>store.setState({filter_kluster:"Kluster 1"})}>Kluster 1</Dropdown.Item>
                    <Dropdown.Item href=""onClick={()=>store.setState({filter_kluster:"Kluster 2"})}>Kluster 2</Dropdown.Item>
                    <Dropdown.Item href=""onClick={()=>store.setState({filter_kluster:"Kluster 3"})}>Kluster 3</Dropdown.Item>
                    <Dropdown.Item href=""onClick={()=>store.setState({filter_kluster:"Kluster 4"})}>Kluster 4</Dropdown.Item>
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

export default connect("filter_payment, filter_kluster",actions)(withRouter(Transactions));
