import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Modal, Input, Grid, Button, Form } from 'semantic-ui-react';
import '../styles/modal.css';

class ModalTambahProduk extends Component {
	render() {
		return (
			<React.Fragment>
				<Modal size='tiny' trigger={<Button>Tambah Item</Button>}>
					<Modal.Header style={{ fontSize: '24px' }}>
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
										<Input
											className='input-modal jenis-produk'
											placeholder='jenis-produk'
											name='jenis-produk'
											value={this.props.username}
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
								<Form.Group>
									<Form.Field inline className='field-modal'>
										<label>Foto Produk</label>
										<Input
											// disabled
											className='input-modal foto-produk'
											placeholder='foto'
											name='foto-produk'
											value={this.props.username}
										/>
									</Form.Field>
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
								<Button style={{ fontSize: '14px' }} positive type='submit'>
									Submit
								</Button>
								<Button
									style={{ fontSize: '14px', marginLeft: '12.5%' }}
									negative
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
