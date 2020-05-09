import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'unistore/react';
import {Dropdown, Table, Checkbox, Icon} from 'semantic-ui-react';
import {actions} from '../store';
import '../styles/sidebar.css';
import '../styles/daftarDataCluster.css';
import _ from 'lodash';
import Sidebar from '../components/sidebar';
import TitlePage from '../components/titleAdmin';
import ModalProduk from '../components/modalTambahProduk';
import PaginationMenu from '../components/pagination';
import Footer from '../components/footer';
import tableData from '../json/masterProductData.json';

const optionsItem = [
  {key: 1, text: 'Semua Item', value: 'Semua Item'},
  {key: 2, text: 'Item A', value: 'Item A'},
  {key: 3, text: 'Item B', value: 'Item B'},
];
const optionsJenis = [
  {key: 1, text: 'Semua Jenis', value: 'Semua Jenis'},
  {key: 2, text: 'Jenis A', value: 'Jenis A'},
  {key: 3, text: 'Jenis B', value: 'Jenis B'},
];
const optionsCluster = [
  {key: 1, text: 'Semua Cluster', value: 'Semua Cluster'},
  {key: 2, text: 'Cluster A', value: 'Cluster A'},
  {key: 3, text: 'Cluster B', value: 'Cluster B'},
];
class DaftarProduk extends Component {
  componentDidMount = async () => {};

  state = {
    valueItem: 'Semua Item',
    valueJenis: 'Semua Jenis',
    valueCluster: 'Semua Cluster',
    column: null,
    data: tableData,
    direction: null,
  };

  handleChangeItem = (e, {value}) => {
    console.log('cek value', value);
    this.setState({valueItem: value});
  };
  handleChangeJenis = (e, {value}) => this.setState({valueJenis: value});
  handleChangeCluster = (e, {value}) => this.setState({valueCluster: value});
  handleSort = (clickedColumn) => () => {
    const {column, data, direction} = this.state;
    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      });
      return;
    }
    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    });
  };

  render() {
    const {column, direction} = this.state;
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 col-sidebar'>
              <Sidebar />
            </div>
            <div className='col-md-9' style={{paddingLeft: '0px'}}>
              <div className='container'>
                <div className='row'>
                  <TitlePage title={'Daftar Produk'} />
                </div>
                <div className='row'>
                  <div className='col-md-12 admin-filter'>
                    <ul>
                      <li>
                        <ModalProduk />
                      </li>
                      <li>
                        <Dropdown
                          onChange={this.handleChangeItem}
                          options={optionsItem}
                          selection
                          value={this.state.valueItem}
                        />
                      </li>
                      <li>
                        <Dropdown
                          onChange={this.handleChangeJenis}
                          options={optionsJenis}
                          selection
                          value={this.state.valueJenis}
                        />
                      </li>
                      <li>
                        <Dropdown
                          className='cluster'
                          onChange={this.handleChangeCluster}
                          options={optionsCluster}
                          selection
                          value={this.state.valueCluster}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='container'>
                <div
                  className='row tabel-data-cluster'
                  style={{padding: '20px 30px'}}
                >
                  <Table sortable selectable basic='very'>
                    <Table.Header>
                      <Table.Row className='thead-col'>
                        <Table.HeaderCell>
                          <Checkbox />
                        </Table.HeaderCell>
                        <Table.HeaderCell
                          sorted={column === 'no_sku' ? direction : null}
                          onClick={this.handleSort('no_sku')}
                          tyle={{color: '#1B355F'}}
                        >
                          No SKU
                        </Table.HeaderCell>
                        <Table.HeaderCell
                          sorted={column === 'nama_produk' ? direction : null}
                          onClick={this.handleSort('nama_produk')}
                          style={{color: '#1B355F'}}
                        >
                          Nama Produk
                        </Table.HeaderCell>
                        <Table.HeaderCell
                          sorted={column === 'tipe_produk' ? direction : null}
                          onClick={this.handleSort('tipe_produk')}
                          style={{color: '#1B355F'}}
                        >
                          Tipe Produk
                        </Table.HeaderCell>
                        <Table.HeaderCell
                          sorted={column === 'status' ? direction : null}
                          onClick={this.handleSort('status')}
                          style={{color: '#1B355F'}}
                        >
                          Status
                        </Table.HeaderCell>
                        <Table.HeaderCell
                          sorted={column === 'user' ? direction : null}
                          onClick={this.handleSort('user')}
                          style={{color: '#1B355F'}}
                        >
                          User
                        </Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {this.state.data.map((dataItem) => {
                        return (
                          <Table.Row>
                            <Table.Cell>
                              <Checkbox />
                            </Table.Cell>
                            <Table.Cell>{dataItem.no_sku}</Table.Cell>
                            <Table.Cell>{dataItem.nama_produk}</Table.Cell>
                            <Table.Cell>{dataItem.tipe_produk}</Table.Cell>
                            <Table.Cell>{dataItem.status}</Table.Cell>
                            <Table.Cell>{dataItem.user}</Table.Cell>
                            <Table.Cell className='vertical-ellipsis'>
                              <Link to='/detail-transaksi'>
                                <Icon name='ellipsis vertical' />
                              </Link>
                            </Table.Cell>
                            <Table.Cell></Table.Cell>
                          </Table.Row>
                        );
                      })}
                    </Table.Body>
                  </Table>
                </div>
              </div>
              <div className='container pagination-cluster'>
                <div className='row'>
                  <PaginationMenu />
                </div>
              </div>
              <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(DaftarProduk));
