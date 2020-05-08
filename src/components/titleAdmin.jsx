import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../styles/bootstrap.min.css';
import '../styles/titleAdmin.css';
import Searchbar from './searchbar';

class TitlePage extends Component {
	componentDidMount = async (props) => {};
	render() {
		return (
			<React.Fragment>
				<div className='col-md-7 col-title-admin'>
					<h1>{this.props.title}</h1>
				</div>
				<div className='col-md-4 col-searchbar-admin'>
					<Searchbar />
				</div>
			</React.Fragment>
		);
	}
}

export default connect('', actions)(withRouter(TitlePage));
