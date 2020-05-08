import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Modal, Input, Grid, Button, Form, Dropdown } from 'semantic-ui-react';
import '../styles/modal.css';

const optionsProduk = [
	{ key: 2, text: 'Produk A', value: 'Produk A' },
	{ key: 3, text: 'Produk B', value: 'Produk B' },
];

class ModalTambahItem extends Component {
	state = {
		valueProduk: '',
	};

	handleChangeItem = (e, { value }) => {
		this.setState({ valueProduk: value });
	};
	render() {
		return (
			<React.Fragment>
				<Modal size='tiny' trigger={<Button>Tambah Item</Button>}>
					<Modal.Header style={{ fontSize: '24px' }}>Tambah Item</Modal.Header>
					<Modal.Content>
						<Form size='large'>
							<Grid.Row className='row-modal'>
								<Form.Group>
									<Form.Field inline className='field-modal'>
										<label>Pilih Produk</label>
										<Dropdown
											className='pilihan-produk'
											onChange={this.handleChangeItem}
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
											placeholder='nama-produk'
											name='nama-produk'
											value={this.props.username}
										/>
									</Form.Field>
								</Form.Group>
								<Form.Group>
									<Form.Field inline className='field-modal'>
										<label>Jenis Produk</label>
										<Input
											disabled
											className='input-modal jenis-item'
											placeholder='jenis-produk'
											name='jenis-produk'
											value={this.props.username}
										/>
									</Form.Field>
								</Form.Group>
								<Form.Group>
									<Form.Field inline className='field-modal'>
										<label>Harga Produk</label>
										<Input
											className='input-modal harga-item'
											placeholder='harga produk'
											name='harga-item'
											value={this.props.username}
										/>
									</Form.Field>
								</Form.Group>
								<Form.Group>
									<Form.Field inline className='field-modal'>
										<label>Stok Produk</label>
										<Input
											className='input-modal stok-item'
											placeholder='stok produk'
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

export default connect('', actions)(withRouter(ModalTambahItem));
