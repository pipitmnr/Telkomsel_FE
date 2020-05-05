import React from "react";
import {Table, Button, Row, Col, Container} from "react-bootstrap"
import Filter from "../components/Filter"
import './transaksi.css';
import Sidebar from "../components/Sidebar"

class Transactions extends React.Component{
    render(){
        return <React.Fragment>
    <Container fluid>
    <Row>
     <Col md="3" id="sidebar">
      <Sidebar/>
     </Col>
     <Col md= "8">
     <div id="transaksi">      
       <Filter/>
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