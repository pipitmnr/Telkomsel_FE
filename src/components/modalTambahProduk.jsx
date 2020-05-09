import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';
import {Modal, Input, Grid, Button, Form, Dropdown} from 'semantic-ui-react';
import '../styles/modal.css';

const optionsJenis = [
  {key: 2, text: 'Jenis A', value: 'Jenis A'},
  {key: 3, text: 'Jenis B', value: 'Jenis B'},
];

class ModalTambahProduk extends Component {
  state = {
    fotoProfil: null,
    fotoName: '',
    valueJenis: 'Semua Jenis',
  };

  handleReset = () => {
    this.setState({fotoProfil: null});
  };

  handleChangeJenis = (e, {value}) => this.setState({valueJenis: value});

  handleInputImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      if (event.target.name === 'fotoProfil') {
        this.setState({
          fotoName: event.target.files[0].name,
          [event.target.name]: event.target.files[0],
        });
      }
    }
    console.log('nama', event.target.name, 'target', event.target.files[0]);
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
                      placeholder='no-sku'
                      name='no-sku'
                      value={this.props.username}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Jenis Produk</label>
                    <Dropdown
                      className='modal-jenis-produk'
                      onChange={this.handleChangeCluster}
                      options={optionsJenis}
                      selection
                      value={this.state.valueJenis}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Nama Produk</label>
                    <Input
                      className='input-modal nama-produk'
                      placeholder='nama-produk'
                      name='nama-produk'
                      value={this.props.username}
                    />
                  </Form.Field>
                </Form.Group>
                <Form.Group>
                  <Form.Field inline className='field-modal'>
                    <label>Deskripsi Produk</label>
                    <Input
                      className='input-modal deskripsi-produk'
                      placeholder='deskripsi-produk'
                      name='deskripsi-produk'
                      value={this.props.username}
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
                      accept='image/jpeg'
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
                      placeholder='status-produk'
                      name='status-produk'
                      value={this.props.username}
                    />
                  </Form.Field>
                </Form.Group>
              </Grid.Row>
              <Grid.Row className='row-submit-modal'>
                <Button style={{fontSize: '14px'}} positive type='submit'>
                  Submit
                </Button>
                <Button
                  style={{fontSize: '14px', marginLeft: '12.5%'}}
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
