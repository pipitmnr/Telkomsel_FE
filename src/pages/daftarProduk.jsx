import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {Dropdown, Table} from 'semantic-ui-react';
import {actions} from '../store';
import swal from 'sweetalert';
import '../styles/sidebar.css';
import '../styles/daftarDataCluster.css';
import _ from 'lodash';
import Sidebar from '../components/sidebar';
import TitlePage from '../components/titleAdmin';
import ModalProduk from '../components/modalTambahProduk';
import ModalEdit from '../components/modalEditProduk';
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
  {key: 2, text: 'Kartu Halo', value: 'Kartu Halo'},
  {key: 3, text: 'Perdana Segel', value: 'Perdana Segel'},
  {key: 4, text: 'Token PLN', value: 'Token PLN'},
  {key: 5, text: 'Voucher', value: 'Voucher'},
];
const optionsCluster = [
  {key: 1, text: 'Semua Cluster', value: 'Semua Cluster'},
  {key: 2, text: 'Cluster A', value: 'Cluster A'},
  {key: 3, text: 'Cluster B', value: 'Cluster B'},
];
class DaftarProduk extends Component {
  componentDidMount = async () => {
    if (localStorage.getItem('username') === null) {
      swal('Error!', 'Mohon login terlebih dahulu!', 'warning');
      this.props.history.replace('/login-admin');
    }
  };

  state = {
    valueItem: 'Semua Item',
    valueJenis: 'Semua Jenis',
    valueCluster: 'Semua Cluster',
    dataCluster: [...tableData['Cluster A'], ...tableData['Cluster B']],
    data: [...tableData['Cluster A'], ...tableData['Cluster B']],
    column: null,
    direction: null,
  };

  handleChangeFilter = (e, value) => {
    if (this.state.valueJenis !== 'Semua Jenis') {
      this.setState({
        data: this.state.dataCluster.filter((d) => {
          return d.jenis_produk === this.state.valueJenis;
        }),
      });
    } else {
      this.setState({
        data: this.state.dataCluster,
      });
    }
  };

  handleChangeItem = (e, {value}) => {
    this.setState({valueItem: value});
  };
  handleChangeJenis = async (e, {value}) => {
    await this.setState({valueJenis: value});
    await this.handleChangeFilter(value);
  };

  handleChangeCluster = (e, {value}) => {
    this.setState({valueJenis: 'Semua Jenis'});
    if (value === 'Semua Cluster') {
      this.setState({
        valueCluster: value,
        dataCluster: [...tableData['Cluster A'], ...tableData['Cluster B']],
        data: [...tableData['Cluster A'], ...tableData['Cluster B']],
      });
    } else {
      this.setState({
        valueCluster: value,
        dataCluster: tableData[value],
        data: tableData[value],
      });
    }
  };

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
            <div
              className='col-md-3 col-sidebar'
              style={{position: 'fixed', zIndex: '10'}}
            >
              <Sidebar />
            </div>
            <div
              className='col-md-9'
              style={{
                paddingLeft: '0px',
                paddingRight: '0px',
                marginBottom: '50px',
                marginLeft: '25.3%',
                position: 'relative',
              }}
            >
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
                        {/* <Table.HeaderCell>
                          <Checkbox />
                        </Table.HeaderCell> */}
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
                          sorted={column === 'jenis_produk' ? direction : null}
                          onClick={this.handleSort('jenis_produk')}
                          style={{color: '#1B355F'}}
                        >
                          Jenis Produk
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

                    {this.state.data.length === 0 ? (
                      <Table.Body>
                        <Table.Row textAlign='center'>
                          <Table.Cell colSpan='12'>
                            Mohon maaf, data tidak ditemukan
                          </Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    ) : (
                      <Table.Body>
                        {this.state.data.map((dataItem) => {
                          return (
                            <Table.Row>
                              {/* <Table.Cell>
                                <Checkbox />
                              </Table.Cell> */}
                              <Table.Cell>{dataItem.no_sku}</Table.Cell>
                              <Table.Cell>{dataItem.nama_produk}</Table.Cell>
                              <Table.Cell>{dataItem.jenis_produk}</Table.Cell>
                              <Table.Cell>{dataItem.status}</Table.Cell>
                              <Table.Cell>{dataItem.user}</Table.Cell>
                              <Table.Cell className='vertical-ellipsis'>
                                <ModalEdit dataRow={dataItem} />
                              </Table.Cell>
                              <Table.Cell></Table.Cell>
                            </Table.Row>
                          );
                        })}
                      </Table.Body>
                    )}
                  </Table>
                </div>
                <div
                  className='container pagination-cluster'
                  style={{paddingLeft: '0px'}}
                >
                  {this.state.data.length === 10 ? (
                    <PaginationMenu />
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </div>
            <div style={{position: 'absolute', bottom: '0', width: '100%'}}>
              <Footer />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(DaftarProduk));
