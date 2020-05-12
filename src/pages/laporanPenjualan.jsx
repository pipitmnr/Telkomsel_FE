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
import {withRouter} from 'react-router-dom';
import '../styles/transaksi.css';
import Sidebar from '../components/sidebar';
import Pagination from "../components/pagination"
import data from "../data/produk.json"
import { CSVLink } from "react-csv";
import axios from "axios"

class LaporanJual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dates_first: 'tanggal awal',
      dates_last: 'tanggal akhir',
	  datas: data,
	  arrow1:null,
	  arrow2:null,
	  arrow3:null,
	  direction: null,
	  dummy:null,
	  result:null,
	  currency:null,
      headerscsv : [
        { label: "Tanggal Pemesanan", key: "tanggal_transaksi" },
        { label: "Nomor Pesanan", key: "nomor_pesanan" },
        { label: "Total Transaksi", key: "total_penjualan" },
        { label: "Status Transaksi", key: "status_transaksi" }
      ],
    };
  }
  componentDidMount() {
	axios
		.get("http://api.openrates.io/latest")
		.then(response => {
			// Initialized with 'EUR' because the base currency is 'EUR'
			// and it is not included in the response
			const currencyAr = ["EUR"]
			for (const key in response.data.rates) {
				currencyAr.push(key)
			}
			this.setState({ currencies: currencyAr.sort() })
		})
		.catch(err => {
			console.log("Opps", err.message);
		});
}
  changePayment=(stats, ids)=>{
	data.map(el=>{
		if(el.id===ids){
		el.status_transaksi=stats;
		el.color="success"
	this.setState({dummy:"new"})}
	})

}
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
}

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
  

  filterJenis = (stats) => {
    if (stats === 'Semua Status') {
      store.setState({filter_payment: stats});
      this.setState({
        datas: data.filter((d) => {
          return d.status_transaksi;
        }),
      });
    } else {
      store.setState({filter_payment: stats});
      this.setState({
        datas: data.filter((d) => {
          return d.status_transaksi === stats;
        }),
      });
    }
  };
  
  currencyChanger=(mu)=>{
	  this.setState({currency:mu})
  }
  currencyHandler = (amount,from,to) => {
	const req = {method: "get",
		url: `http://api.openrates.io/latest?base=${from}&symbols=${to}`,
		headers: {"Access-Control-Allow-Origin":'*'}

	};
	if (amount === 0) {
		axios (req)
			.then(response => {
				// console.log("oops"+response)
				this.state.data.reduce((accumulator, d)=>{
				var x=(d.total_penjualan * (response.data.rates[to]))
				this.setState({ result: accumulator + x})
			})
		})
			.catch(err => {
				console.log("Opps", err.message);
			})
	}else if (amount !==0){
		axios(req)
			.then(response=>{
				var result= amount *response.data.rates[to]
				return result
			})
	
    }else {
		alert("Wrong Input" )
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
						<Col sm='3' className='col-sidebar'>
							<Sidebar />
						</Col>
						
						<Col sm='9' className='kluster'>
						<Row>

							<Col md="10">
							<h1 id="title-jual">Laporan Penjualan</h1>
                            </Col>
						
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
									>Semua Kluster</Dropdown.Item>
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
												<Dropdown.Item
													onClick={() =>
														this.setState({ dates_first: '1/2/2020' })
													}
												>
													1/2/2020
												</Dropdown.Item>
											</DropdownButton>
											<p id="middle-hingga"> &nbsp;Hingga&nbsp; </p>

											<DropdownButton
												id='date-but-2'
												title={this.state.dates_last}
												variant=""
											>
												<Dropdown.Item
													onClick={() =>
														this.setState({ dates_last: '10/2/2020' })
													}
												>
													10/2/2020
												</Dropdown.Item>
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
										<h2>Rp {this.state.datas.reduce(function(accumulator,d){return accumulator+d.total_penjualan},0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</h2>
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
										{this.state.datas.map(row=>(
										<tr>
											<td>{row.tanggal_transaksi}</td>
											<td>{row.nomor_pesanan}</td>
											<td>Rp {row.total_penjualan.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")}</td>
											<td>
											{row.status_transaksi==="Terbayar" ?
											<Dropdown>
												<DropdownButton variant={row.color} title={row.status_transaksi}>
													<Dropdown.Item onClick={event=>this.changePayment("Terkirim", row.id)}>Terkirim</Dropdown.Item>
												</DropdownButton>
											</Dropdown> : <Button variant={row.color}>{row.status_transaksi}</Button>}
											</td>
											<td>
												<a className='dots' href='/detail-transaksi'>
													<i class='fa fa-ellipsis-v'></i>
												</a>
											</td>
										</tr>))}
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
  'filter_payment,filter_kluster',
  actions
)(withRouter(LaporanJual));
