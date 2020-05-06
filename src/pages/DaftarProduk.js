import React from "react"
import {Navbar, Button, Dropdown,DropdownButton,Container,Row,Table, Col} from "react-bootstrap"
import {connect} from 'unistore/react'
import {store,actions} from '../store'
import {withRouter} from 'react-router-dom'
// import FilterProduk from "../components/FilterDaftarProduk"

class ProductList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {filter_item:"Semua Item", filter_jenis:"Semua Jenis"};
    }
    checking=()=>{
        var elemen=document.getElementById('checkProd')
        var elemen2=document.getElementsByTagName('input')
        
        if (elemen.checked==true){
          
            for(var i=1; i<elemen2.length; i++){
                console.log(elemen2[i].checked)
                if(elemen2[i].type=="checkbox"){
                    elemen2[i].checked=true
                    
                }
            }
        }else if (elemen.checked==false){
            for(var i=1; i<elemen2.length; i++){
                if(elemen2[i].type=="checkbox"){
                    elemen2[i].checked=false;
                }
            }

        }

    }
    render (){
        return  <React.Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <Container fluid>
        <Row>
         <Col md="3">
         </Col>
         <Col md= "8">
         <div id="transaksi">      
         <Navbar expand="lg">
            <Navbar.Collapse> 
      <Button href="">Tambah Item</Button>  
      &nbsp;  
      <Dropdown>
            <DropdownButton className="d-inline-block align-center" title={this.state.filter_item}>
                <Dropdown.Item onClick={()=>this.setState({filter_item:"Perdana 1"})}>Perdana 1</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.setState({filter_item:"Perdana 2"})}>Perdana 2</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.setState({filter_item:"Perdana 3"})}>Perdana 3</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.setState({filter_item:"Perdana 4"})}>Perdana 4</Dropdown.Item>
            </DropdownButton>
            &nbsp;
            <DropdownButton className="d-inline-block align-center" title={this.state.filter_jenis}>
            <Dropdown.Item onClick={()=>this.setState({filter_jenis:"Perdana"})}>Perdana </Dropdown.Item>
                <Dropdown.Item onClick={()=>this.setState({filter_jenis:"Paket Data"})}>Paket Data</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.setState({filter_jenis:"Internet"})}>Internet</Dropdown.Item>
                <Dropdown.Item onClick={()=>this.setState({filter_jenis:"Telepon"})}>Telepon </Dropdown.Item>
            </DropdownButton>
            &nbsp;
            <DropdownButton id='bayar' className="d-inline-block align-center" title={this.props.filter_payment} variant="danger">
                    <Dropdown.Item  as="button" onClick={()=>store.setState({filter_payment:"Terbayar"})}>Terbayar</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={()=>store.setState({filter_payment:"Gagal"})}>Gagal</Dropdown.Item>
                    <Dropdown.Item  as="button" onClick={()=>store.setState({filter_payment:"Terkirim"})}>Terkirim</Dropdown.Item>
                    <Dropdown.Item  as="button" onClick={()=>store.setState({filter_payment:"Menunggu Bayar"})}>Menunggu Bayar</Dropdown.Item>
            </DropdownButton>
        </Dropdown>
        </Navbar.Collapse>   
        </Navbar>
           <Table striped bordered hover variant="white">
            <thead>
                <th><input type="checkbox" id="checkProd" onChange={event=>this.checking()}/></th>
                <th>No SKU</th>
                <th>Nama Produk</th>
                <th>Tipe Produk</th>
                <th>Harga</th>
                <th>Sisa Stok</th>
                <th>User</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox"/></td>
                    <td>0000000001</td>
                    <td>Perdana Segel Nomor Cantik</td>
                    <td>Perdana Segel</td>
                    <td>Rp 15.000</td>
                    <td>10</td>
                    <td>Aditya</td>
                    <td><a className="dots" href=""><i class="fa fa-ellipsis-v"></i></a></td>
                </tr>
            </tbody>
           </Table>
           </div> 
          </Col>
        </Row>
        </Container>
        </React.Fragment>
    

    }
}

export default connect("filter_payment",actions)(withRouter(ProductList));