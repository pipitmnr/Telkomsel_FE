import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';
import {Modal, Input, Grid, Button, Form, Dropdown} from 'semantic-ui-react';
import '../styles/modal.css';

const optionsProduk = [
  {key: 1, text: 'Pilih...', value: 'Pilih...'},
  {key: 2, text: 'Perdana Segel A', value: 'Perdana Segel A'},
  {key: 3, text: 'Voucher B', value: 'Voucher B'},
  {key: 4, text: 'Voucher C', value: 'Voucher C'},
];

class ModalTambahItem extends Component {
  state = {
    valueProduk: 'Pilih...',
    nama_produk: '',
    jenis_produk: '',
    harga_produk: '',
    stok_produk: '',
  };

  handleChangeProduk = async (e, {value}) => {
    this.setState({valueProduk: value});
  };

  handleChangeItem = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleChangeHarga = async (event) => {
    this.setState({[event.target.name]: event.target.value});
    var value = event.target.value.toString();
    var bilangan = value.split('.').join('');
    console.log('cek bilangan', bilangan);
    if (true) {
      var reverseRibuan = bilangan.toString().split('').reverse().join(''),
        ribuanList = reverseRibuan.match(/\d{1,3}/g);
      var ribuan = ribuanList.join('.').split('').reverse().join('');
    }
    this.setState({[event.target.name]: ribuan});
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
    if (this.state.valueProduk === 'Perdana Segel A') {
      nama_produk = 'Perdana Segel Cantik';
      jenis_produk = 'Perdana Segel';
    } else if (this.state.valueProduk === 'Voucher B') {
      nama_produk = 'Voucher Mobile Legend';
      jenis_produk = 'Voucher';
    } else if (this.state.valueProduk === 'Voucher C') {
      nama_produk = 'Voucher Call of Duty';
      jenis_produk = 'Voucher Game';
    } else if (this.state.valueProduk === 'Pilih...') {
      nama_produk = 'Nama Produk';
      jenis_produk = 'Jenis produk';
    }
    console.log('cek state harga', this.state.harga_produk);
    return (
      <React.Fragment>
        <Modal size='tiny' trigger={<Button>Tambah Item</Button>}>
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
                      className='input-modal harga-item'
                      placeholder='harga produk'
                      name='harga_produk'
                      onChange={this.handleChangeHarga}
                      value={`Rp ${this.state.harga_produk}`}
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

export default connect('', actions)(withRouter(ModalTambahItem));
