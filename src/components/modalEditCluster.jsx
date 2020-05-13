import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';
import {
  Modal,
  Input,
  Grid,
  Button,
  Form,
  Dropdown,
  Icon,
} from 'semantic-ui-react';
import '../styles/modal.css';

const optionsProduk = [
  {key: 1, text: 'Pilih...', value: 'Pilih...'},
  {key: 2, text: 'Perdana Cantik', value: 'Perdana Segel No Cantik'},
  {key: 3, text: 'Perdana Ganteng', value: 'Perdana Segel No Ganteng'},
  {key: 4, text: 'Token Pascabayar', value: 'Token PLN Pascabayar'},
  {key: 5, text: 'Token Prabayar', value: 'Token PLN Prabayar'},
  {key: 6, text: 'Voucher COD', value: 'Voucher Call of Duty'},
  {key: 7, text: 'Voucher ML', value: 'Voucher Mobile Legend'},
  {key: 8, text: 'Voucher Bulanan', value: 'Voucher Internet Bulanan'},
  {
    key: 9,
    text: 'Voucher I Mingguan',
    value: 'Voucher I Mingguan',
  },
  {key: 10, text: 'Voucher I Harian', value: 'Voucher Internet Harian'},
  {key: 11, text: 'Halo 50GB', value: 'Halo Kick Gold 50GB'},
];

class ModalEditData extends Component {
  state = {
    valueProduk: this.props.dataRow.nama_produk,
    nama_produk: this.props.dataRow.nama_produk,
    jenis_produk: this.props.dataRow.jenis_produk,
    harga_produk: this.props.dataRow.harga_produk
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'),

    stok_produk: this.props.dataRow.sisa_stok
      .toString()
      .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.'),
  };

  handleChangeProduk = async (e, {value}) => {
    this.setState({valueProduk: value});
  };

  handleChangeItem = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleChangeHarga = async (event) => {
    const regex = /^[a-z]+$/i;
    if (regex.test(event.target.value) === false) {
      if (event.target.value !== '') {
        this.setState({[event.target.name]: event.target.value});
        var value = event.target.value.toString();
        var bilangan = value.split('.').join('');
        if (true) {
          var reverseRibuan = bilangan.toString().split('').reverse().join(''),
            ribuanList = reverseRibuan.match(/\d{1,3}/g);
          var ribuan = ribuanList.join('.').split('').reverse().join('');
        }
        this.setState({[event.target.name]: ribuan});
      } else if (event.target.value === '') {
        this.setState({[event.target.name]: ''});
      }
    }
  };

  handleReset = () => {
    this.setState({
      valueProduk: 'Pilih...',
      nama_produk: '',
      jenis_produk: '',
      harga_produk: '',
      stok_produk: '',
    });
  };

  render() {
    let nama_produk;
    let jenis_produk;
    if (this.state.valueProduk === 'Perdana Segel No Cantik') {
      nama_produk = 'Perdana Segel No Cantik';
      jenis_produk = 'Perdana Segel';
    } else if (this.state.valueProduk === 'Perdana Segel No Ganteng') {
      nama_produk = 'Perdana Segel No Ganteng';
      jenis_produk = 'Perdana Segel';
    } else if (this.state.valueProduk === 'Token PLN Pascabayar') {
      nama_produk = 'Token PLN Pascabayar';
      jenis_produk = 'Token PLN';
    } else if (this.state.valueProduk === 'Token PLN Prabayar') {
      nama_produk = 'Token PLN Prabayar';
      jenis_produk = 'Token PLN';
    } else if (this.state.valueProduk === 'Voucher Call of Duty') {
      nama_produk = 'Voucher Call of Duty';
      jenis_produk = 'Voucher';
    } else if (this.state.valueProduk === 'Voucher Mobile Legend') {
      nama_produk = 'Voucher Mobile Legend';
      jenis_produk = 'Voucher';
    } else if (this.state.valueProduk === 'Voucher Internet Bulanan') {
      nama_produk = 'Voucher Internet Bulanan';
      jenis_produk = 'Voucher';
    } else if (this.state.valueProduk === 'Voucher Internet Mingguan') {
      nama_produk = 'Voucher Internet Mingguan';
      jenis_produk = 'Voucher';
    } else if (this.state.valueProduk === 'Voucher Internet Harian') {
      nama_produk = 'Voucher Internet Harian';
      jenis_produk = 'Voucher';
    } else if (this.state.valueProduk === 'Halo Kick Gold 50GB') {
      nama_produk = 'Halo Kick Gold 50GB';
      jenis_produk = 'Kartu Halo';
    } else if (this.state.valueProduk === 'Pilih...') {
      nama_produk = 'Nama Produk';
      jenis_produk = 'Jenis produk';
    }
    console.log('cek state harga', this.state.harga_produk);
    return (
      <React.Fragment>
        <Modal
          closeIcon={{
            style: {
              top: '0.5rem',
              right: '0.5rem',
              zIndex: '1000',
              fontSize: '25px',
              paddingTop: '5px',
            },
            color: 'black',
            name: 'close',
          }}
          size='tiny'
          trigger={
            <Icon style={{cursor: 'pointer'}} name='ellipsis vertical' />
          }
        >
          <Modal.Header
            style={{fontSize: '24px', position: 'relative', height: 'auto'}}
          >
            Tambah Item
          </Modal.Header>
          <Modal.Content>
            <Form size='large'>
              <Grid.Row className='row-modal'>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Pilih Produk</label>
                    <Dropdown
                      className='pilihan-produk'
                      onChange={this.handleChangeProduk}
                      options={optionsProduk}
                      selection
                      value={this.state.valueProduk}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Nama Produk</label>
                    <Input
                      disabled
                      className='input-modal nama-item'
                      placeholder='nama produk'
                      name='nama_produk'
                      onChange={this.handleChangeItem}
                      value={nama_produk}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Jenis Produk</label>
                    <Input
                      disabled
                      className='input-modal jenis-item'
                      placeholder='jenis produk'
                      name='jenis_produk'
                      onChange={this.handleChangeItem}
                      value={jenis_produk}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Harga Produk</label>
                    <Input
                      label='Rp'
                      className='input-modal harga-item'
                      placeholder='harga produk'
                      name='harga_produk'
                      onChange={this.handleChangeHarga}
                      value={this.state.harga_produk}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Stok Produk</label>
                    <Input
                      className='input-modal stok-item'
                      placeholder='stok produk'
                      name='stok_produk'
                      onChange={this.handleChangeHarga}
                      value={this.state.stok_produk}
                    />
                  </Form.Field>
                </Form.Group>
              </Grid.Row>
              <Grid.Row className='row-submit-modal'>
                <Button className='positive-button' positive type='submit'>
                  Submit
                </Button>
                <Button
                  className='negative-button'
                  negative
                  onClick={this.handleReset}
                >
                  Reset
                </Button>
              </Grid.Row>
            </Form>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(ModalEditData));
