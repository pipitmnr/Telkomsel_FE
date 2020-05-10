import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';
import {Modal, Input, Grid, Button, Form, Dropdown} from 'semantic-ui-react';
import '../styles/modal.css';

const optionsJenis = [
  {key: 2, text: 'Perdana Segel', value: 'Perdana Segel'},
  {key: 3, text: 'Voucher', value: 'Voucher'},
];

class ModalTambahProduk extends Component {
  state = {
    fotoProfil: null,
    fotoName: '',
    valueJenis: 'Semua Jenis',
    no_sku: '',
    jenis_produk: '',
    nama_produk: '',
    deskripsi_produk: '',
    status_produk: '',
  };

  handleChangeInput = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleReset = () => {
    this.setState({
      fotoProfil: null,
      no_sku: '',
      jenis_produk: '',
      nama_produk: '',
      deskripsi_produk: '',
      status_produk: '',
    });
  };

  handleOnChangeJenisProduk = (e, {value}) =>
    this.setState({jenis_produk: value});

  handleInputImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.name === 'fotoProfil') {
        this.setState({
          fotoName: event.target.files[0].name,
          [event.target.name]: event.target.files[0],
        });
      }
    }
  };
  render() {
    const {fotoProfil, fotoName} = this.state;
    return (
      <React.Fragment>
        <Modal size='tiny' trigger={<Button>Tambah Item</Button>}>
          <Modal.Header
            style={{fontSize: '24px', position: 'relative', height: 'auto'}}
          >
            Tambah Produk
          </Modal.Header>
          <Modal.Content>
            <Form size='large'>
              <Grid.Row className='row-modal'>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>No. SKU</label>
                    <Input
                      className='input-modal no-sku'
                      placeholder=''
                      name='no_sku'
                      onChange={this.handleChangeInput}
                      value={this.state.no_sku}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Jenis Produk</label>
                    <Dropdown
                      className='modal-jenis-produk'
                      onChange={this.handleOnChangeJenisProduk}
                      options={optionsJenis}
                      selection
                      value={this.state.jenis_produk}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Nama Produk</label>
                    <Input
                      className='input-modal nama-produk'
                      placeholder=''
                      name='nama_produk'
                      onChange={this.handleChangeInput}
                      value={this.state.nama_produk}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Deskripsi Produk</label>
                    <Input
                      className='input-modal deskripsi-produk'
                      placeholder=''
                      name='deskripsi_produk'
                      onChange={this.handleChangeInput}
                      value={this.state.deskripsi_produk}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group className='upload-gambar'>
                  <Form.Field
                    inline
                    className='field-modal'
                    style={{width: 'auto'}}
                    required
                  >
                    <label>Foto Produk</label>

                    <Input
                      type='file'
                      id='fotoProfil'
                      name='fotoProfil'
                      accept='image/jpeg,image/x-png'
                      hidden
                      onChange={this.handleInputImage}
                    />
                  </Form.Field>
                  {fotoProfil === null ? (
                    <Button
                      style={{marginLeft: '16px'}}
                      icon='file'
                      content='Pilih File'
                      labelPosition='left'
                      as='label'
                      htmlFor='fotoProfil'
                      type='button'
                      className='mb-3'
                    />
                  ) : (
                    <span style={{marginLeft: '16px', marginBottom: '15px'}}>
                      {fotoName}
                    </span>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Status Produk</label>
                    <Input
                      className='input-modal status-produk'
                      placeholder=''
                      name='status_produk'
                      onChange={this.handleChangeInput}
                      value={this.state.status_produk}
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

export default connect('', actions)(withRouter(ModalTambahProduk));
