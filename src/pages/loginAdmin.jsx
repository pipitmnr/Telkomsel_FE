import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions, store } from '../store';
import { Grid, Image, Form, Input, Button } from 'semantic-ui-react';
import Footer from '../components/footer';
import LoginLogo from '../images/Telkomsel_Logo.svg';
import '../styles/loginAdmin.css';

class LoginAdmin extends Component {
	componentDidMount = async () => {};

	handleChange = (event) => {
		store.setState({ [event.target.name]: event.target.value });
		localStorage.setItem('username', this.props.username);
	};

	handleSubmit = () => {
		this.props.history.push('/');
	};

	render() {
		return (
			<React.Fragment>
				<Grid columns={1} centered>
					<Grid.Row>
						<Grid.Column>
							<Image className='Logo-Admin' src={LoginLogo} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
				<Grid verticalAlign='middle' columns={3} centered>
					<Grid.Row className='row-form-login' color='red' key='red'>
						<Grid.Column width={5}></Grid.Column>
						<Grid.Column width={7}>
							<Form size='massive'>
								<br />
								<Grid.Row className='row-username'>
									<Form.Group unstackable>
										<Form.Field inline>
											<label
												style={{ fontSize: '30px', color: 'white' }}
												className='label-form-login'
											>
												Username
											</label>
											<Input
												placeholder='Username'
												name='username'
												value={this.props.username}
												onChange={(e) => this.handleChange(e)}
											/>
										</Form.Field>
									</Form.Group>
								</Grid.Row>
								<Grid.Row className='row-password'>
									<Form.Group>
										<Form.Field inline>
											<label
												style={{ fontSize: '30px', color: 'white' }}
												className='label-form-login'
											>
												Password
											</label>
											<Input
												placeholder='Password'
												name='password'
												type='password'
												onChange={(e) => this.handleChange(e)}
											/>
										</Form.Field>
									</Form.Group>
								</Grid.Row>
								<Grid.Row className='row-submit'>
									<Button style={{ fontSize: '18px' }} secondary type='submit'>
										Login
									</Button>
								</Grid.Row>
								<br />
							</Form>
						</Grid.Column>
						<Grid.Column width={4}></Grid.Column>
					</Grid.Row>
				</Grid>
				<Grid>
					<Grid.Row className='row-footer'>
						<Footer />
					</Grid.Row>
				</Grid>
			</React.Fragment>
		);
	}
}

export default connect('username', actions)(withRouter(LoginAdmin));
