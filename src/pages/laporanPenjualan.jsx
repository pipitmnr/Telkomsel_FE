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
import {connect} from 'unistore/react';
import {store, actions} from '../store';
import {withRouter, Link} from 'react-router-dom';
import '../styles/transaksi.css';
import Sidebar from '../components/sidebar';
import Pagination from "../components/pagination"
import data from "../data/produk.json"
import { CSVLink } from "react-csv";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import format from "date-fns/format";

class LaporanJual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	  filter_kluster:"Semua Cluster",
      dates_first: "Tanggal Awal",
      dates_last: "Tanggal Akhir",
	  datas: data,
	  arrow1:null,
	  arrow2:null,
	  arrow3:null,
	  direction: null,
	  dummy:null,
	  dates:null,
      headerscsv : [
        { label: "Tanggal Pemesanan", key: "tanggal_transaksi" },
        { label: "Nomor Pesanan", key: "nomor_pesanan" },
        { label: "Total Transaksi", key: "total_penjualan" },
        { label: "Status Transaksi", key: "status_transaksi" }
      ],
    };
  }
 
  changePayment=(stats, ids)=>{
	data.map(el=>{
		if(el.id===ids){
		el.status_transaksi=stats;
		el.color="success"
	this.setState({dummy:"new"})}
	})

};
  sortingNum = (key) => {
	if (this.state.direction===null || this.state.direction==='descending'){
    data.sort((a, b) => b[key] - a[key]);
    this.setState({datas: data, direction:'ascending', arrow3:"up"});
  }else if (this.state.direction==='ascending'){
    data.sort((a, b) => a[key] - b[key]);
    this.setState({datas: data, direction:'descending', arrow3:"down"});
  }
};

sortingOrder=(key)=>{
	if(this.state.direction===null|| this.state.direction==='descending'){
	data.sort((a,b)=>{var newA=a[key].split('/').concat(),newB=b[key].split('/').concat();
	if (newA>newB){
		return -1
	}
	if (newA<newB){
		return 0
	}})
	this.setState({datas:data, direction:"ascending",arrow2:"up"})
	}else if(this.state.direction==="ascending"){
	data.sort((a,b)=>{var newA=a[key].split('/').concat(),newB=b[key].split('/').concat();
	if (newA<newB){
		return -1
	}
	})
	this.setState({datas:data, direction:"descending",arrow2:"down"})
}
};

  sorting = (key) => {
	if (this.state.direction===null || this.state.direction==='descending'){	
    data.sort((a, b) => {
      var dateA = a[key].split('/'),
        dateB = b[key].split('/');
      return (
        new Date(dateB[2], dateB[1], dateB[0]) -
        new Date(dateA[2], dateA[1], dateA[0])
      );
	})

    this.setState({datas: data, direction:'ascending', arrow1: "up"});
  }else if (this.state.direction==='ascending'){
	data.sort((a, b) => {
		var dateA = a[key].split('/'),
		  dateB = b[key].split('/');
		return (
		  new Date(dateA[2], dateA[1], dateA[0]) -
		  new Date(dateB[2], dateB[1], dateB[0])
		);
	  });
	  this.setState({datas: data, direction:'descending', arrow1:"down"});

  }
};
  handleDateFilter=(dates, key)=>{
	if(key==="date_first"){
	   this.setState({dummy:"date_first", dates_first:dates.toString()})
    }else if(key==="date_last"){
		this.setState({dummy:"date_last", dates_last:dates.toString()})
	    this.execute();
  }
}

execute=()=>{
	var strA = this.state.dates_first.split('/'),
	strB = this.state.dates_last.split('/');
	var dateA=new Date(strA[2], strA[1], strA[0]),
	dateB=new Date(strB[2], strB[1], strB[0])
	if(dateA<dateB){
		this.setState({datas: data.filter((del)=>{
			var strCek=del.tanggal_transaksi.split('/')
			var cekDate=new Date (strCek[2],strCek[1],strCek[0])
			return(cekDate >= dateA && cekDate <=dateB)
			
		})})
		
  }
}

filterCluster=(clus)=>{
	if (clus==='Semua Cluster'){
		
		this.setState({filter_kluster:clus, datas: data.filter(d=>{return d.kluster})})
	}else{
		
		this.setState({filter_kluster:clus,datas: data.filter(d=>{return d.kluster===clus})})
	}
   
}
  filterJenis = (stats) => {
    if (stats === 'Semua Status') {
      store.setState({filter_payment: stats});
      this.setState({
        datas: data.filter((d) => {
          return d.status_transaksi;
        }),
	  });
	}else{
      store.setState({filter_payment: stats});
      this.setState({
        datas:data.filter((d) => {
          return d.status_transaksi === stats;
        }),
      });
    }
  };
  

  
  render() {

    return (
      <React.Fragment>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
        ></link>
				<Container fluid className="all-penjualan">
					<Row>
						<div
							className='col-md-3 col-sidebar'
							style={{position: 'fixed', zIndex: '10'}}
							>
							<Sidebar />
						</div>
						<Col sm='3'></Col>
						<Col sm='9' className='kluster'>
						<Row>

							<Col md="10">
							<h1 id="title-jual">Laporan Penjualan</h1>
                            </Col>
						
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
									>Semua Kluster
									</Dropdown.Item>
								</DropdownButton>
							</Row>
							<Row className='baris'>
								<div className='two-button'>
									<p>
										<b>Pilih Tanggal</b>
									</p>
									<Col md='1'>
										<Dropdown  as={ButtonGroup}>
											<DropdownButton
												id='date-but'
												title={this.state.dates_first}
											    variant=""											
												>
												<DatePicker onChange={date=>this.handleDateFilter(format(date, 'dd/MM/yyyy'),"date_first")} inline/>
										</DropdownButton>
										
											<p id="middle-hingga"> &nbsp;Hingga&nbsp; </p>

											<DropdownButton
												id='date-but-2'
												title={this.state.dates_last}
												variant=""
											>
												<DatePicker onChange={date=>this.handleDateFilter(format(date, 'dd/MM/yyyy'), "date_last")} inline/>
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
											    id="payment-filter-but"
												className='d-inline-block align-center'
												title={this.props.filter_payment}
												variant=""
											>
												<Dropdown.Item
													onClick={event =>
														this.filterJenis('Terbayar')
													}
												>
													Terbayar
												</Dropdown.Item>
												<Dropdown.Item
													onClick={event =>
														this.filterJenis('Terkirim')
													}
												>
													Terkirim
												</Dropdown.Item>
												<Dropdown.Item
													onClick={event =>
														this.filterJenis('Gagal')
													}
												>
													Gagal
												</Dropdown.Item>
												<Dropdown.Item
													onClick={event =>
														this.filterJenis('Menunggu Bayar')
													}
												>
													Menunggu Bayar
												</Dropdown.Item>
												<Dropdown.Item
													onClick={event =>
														this.filterJenis('Semua Status')
													}
												>
												   Semua Status
												</Dropdown.Item>
											</DropdownButton>
										</Dropdown>
									</Col>
								</div>
								<div className='one-button'>
									<Col>
									<p>Total Transaksi</p>
										<h2>Rp <p className="total-header">{this.state.datas.reduce(function(accumulator,d){return accumulator+d.total_penjualan},0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</p></h2>
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
										<th><Dropdown drop={this.state.arrow1}>
											<Dropdown.Toggle
	   
												id='sort-date'
												title="Tanggal Pemesanan"
												variant="white"
												onClick={event=> this.sorting('tanggal_transaksi')}
											> 
											     Tanggal Pemesanan
												</Dropdown.Toggle>
											</Dropdown></th>
										<th><Dropdown drop={this.state.arrow2}>
											<Dropdown.Toggle
												id='sort-transaction'
												title="nomor_pesanan"
												variant="white"
												onClick={event=>this.sortingOrder('nomor_pesanan')}
											>
												Nomor Pesanan
												</Dropdown.Toggle>
											</Dropdown></th>
										<th><Dropdown drop={this.state.arrow3}>
											<Dropdown.Toggle
												id='sort-transaction'
												title="Total Transaksi"
												variant="white"
												onClick={event=>this.sortingNum('total_penjualan')}
											>
												Total Transaksi
												</Dropdown.Toggle>
											</Dropdown></th>
										<th>Status Transaksi</th>
										<th>Detail Transaksi</th>
									</thead>
									<tbody>
										
										{this.state.datas.length !==0 ? this.state.datas.map(row=>(
										<tr>
											<td>{row.tanggal_transaksi}</td>
											<td>{row.nomor_pesanan}</td>
											<td><Row>
												<Col md="3"><div className="rata-kiri">Rp</div></Col>
												<Col md="6">
													<div className="rata-kanan">{row.total_penjualan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}
										
											</div>
											</Col>
											</Row></td>
											<td>
											{row.status_transaksi==="Terbayar" ?
											<Dropdown>
												<DropdownButton variant={row.color} title={row.status_transaksi}>
													<Dropdown.Item onClick={event=>this.changePayment("Terkirim", row.id)}>Terkirim</Dropdown.Item>
												</DropdownButton>
											</Dropdown> : <Button variant={row.color}>{row.status_transaksi}</Button>}
											</td>
											<td>
												<Link className='dots' to='/detail-transaksi'>
													<i class='fa fa-ellipsis-v'></i>
												</Link>
											</td>
										</tr>)): <tr><td colSpan="12">Mohon Maaf Data Tidak Ditemukan</td></tr>}
									</tbody>
								</Table>
							</Row>
							<Row>
							<Col md="8"><Pagination/></Col>
							
							<Col md="4"><div className="btn laporan-penjualan-export-excel">
                    <CSVLink data={this.state.datas} headers={this.state.headerscsv} separator={";"}>
                      Export Excel / CSV
                    </CSVLink>
                  </div>
                </Col>
                </Row>
							<br/>
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
)(withRouter(LaporanJual));
