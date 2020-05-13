import React from 'react';
import {
	Table,
	DropdownButton,
	Dropdown,
	Button,
	Row,
	Col,
	Container
} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {store, actions} from '../store';
import swal from 'sweetalert';
import '../styles/transaksi.css';
import Sidebar from '../components/sidebar';
import transaksi from '../data/transaksi.json'
import Pagination from "../components/pagination"
import Searchbar from "../components/searchbar"

class Transactions extends React.Component {
  componentDidMount = async () => {
    if (localStorage.getItem('username') === null) {
      swal('Error!', 'Mohon login terlebih dahulu!', 'warning');
      this.props.history.replace('/login-admin');
    }
  };
  constructor(props) {
    super(props);
	  this.state = {list_transaksi: transaksi, filter_kluster:"Semua Cluster",direction:null, arrow:null, dummy:null, kondisi:null};
  }
    changePayment=(stats, ids)=>{
		transaksi.map(el=>{
			if(el.id===ids){
			el.status=stats;
			el.color="success"
		this.setState({dummy:"new"})}
		})

	}
	filterCluster=(clus)=>{
		if (clus==='Semua Cluster'){
			this.setState({filter_kluster:clus})
			this.setState({list_transaksi: transaksi.filter(d=>{return d.kota})})
		}else{
			this.setState({filter_kluster:clus})
			this.setState({list_transaksi: transaksi.filter(d=>{return d.kota===clus})})
		}
       
	}

	sortingOrder=(key)=>{

		if(this.state.direction===null|| this.state.direction==='descending'){
		transaksi.sort((a,b)=>{var newA=a[key].split(/[./,-]+/).concat(),newB=b[key].split('/').concat();
		if (newA>newB){
			return -1
		}
		})
		this.setState({list_transaksi:transaksi, kondisi:key, direction:"ascending",arrow:"up"})
	    }else if(this.state.direction==="ascending"){
		transaksi.sort((a,b)=>{var newA=a[key].split(/[./,-]+/).concat(),newB=b[key].split('/').concat();
		if (newA<newB){
			return -1
		}
		if (newA>newB){
			return 0
		}
	    })
		this.setState({list_transaksi:transaksi,direction:"descending",arrow:"down"})
	}
}
	filterJenis=(stats)=>{
		if (stats==='Semua Status'){
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
						<div
							className='col-md-3 col-sidebar'
							style={{position: 'fixed', zIndex: '10'}}
							>
							<Sidebar />
						</div>
						<Col md='3'></Col>
						<Col md='9'>
						
							<div id='transaksi'>
							<Row>
							  <Col md="7">
							  <h1 id="title-transaksi">Transaksi Anda</h1>
							  </Col>
							  <Col md="5">
							  <Searchbar id="search"/>
							  </Col>
							</Row>
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
														this.filterJenis('Semua Status')
													}
												>
													Semua Status
												</Dropdown.Item>
												
											</DropdownButton>
											&nbsp;
											<DropdownButton
												className='d-inline-block align-center'
												title={this.state.filter_kluster}
												variant='danger'
											>
												<Dropdown.Item
													href=''
													onClick={event=>
														this.filterCluster('Cluster A')
													}
												>
													Cluster A
												</Dropdown.Item>
												<Dropdown.Item
													href=''
													onClick={event=>
														this.filterCluster('Cluster B')
													}
												>
													Cluster B
												</Dropdown.Item>
												
												<Dropdown.Item
													href=''
													onClick={event=>
														this.filterCluster('Semua Cluster')
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
										<th><Dropdown drop={this.state.kondisi==="nomor_pesanan"? this.state.arrow: "down"}>
											<Dropdown.Toggle
												id='sort-transaction'
												title="Nomor Pesanan"
												variant="white"
												onClick={event=>this.sortingOrder('nomor_pesanan')}
											>
												Nomor Pesanan
												</Dropdown.Toggle>
											</Dropdown></th>
										<th><Dropdown drop={this.state.kondisi==="nama_pemesan"? this.state.arrow : "down"}>
											<Dropdown.Toggle
												id='sort-transaction'
												title="Nama Pemesan"
												variant="white"
												onClick={event=>this.sortingOrder('nama_pemesan')}
											>
												Nama Pemesan
												</Dropdown.Toggle>
											</Dropdown></th>
										<th><Dropdown drop={this.state.kondisi==="alamat"? this.state.arrow: "down"}>
											<Dropdown.Toggle
												id='sort-transaction'
												title="alamat"
												variant="white"
												onClick={event=>this.sortingOrder('alamat')}
											>
												Kota/Kecamatan Alamat
												</Dropdown.Toggle>
											</Dropdown></th>
										<th><Dropdown drop={this.state.kondisi==="detail_order"? this.state.arrow: "down"}>
											<Dropdown.Toggle
												id='sort-transaction'
												title="detail order"
												variant="white"
												onClick={event=>this.sortingOrder('detail_order', this.state.detail_order)}
											>
												Detail Pesanan
												</Dropdown.Toggle>
											</Dropdown></th>
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
										
											<td>{row.status==="Terbayar" ?
											<Dropdown>
												<DropdownButton variant={row.color} title={row.status}>
													<Dropdown.Item onClick={event=>this.changePayment("Terkirim", row.id)}>Terkirim</Dropdown.Item>
												</DropdownButton>
											</Dropdown>: <Button variant={row.color}>{row.status}</Button>}
									
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
  'filter_payment',
  actions
)(withRouter(Transactions));



