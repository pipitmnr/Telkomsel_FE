import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import { Pagination } from 'semantic-ui-react';
import '../styles/bootstrap.min.css';
import '../styles/titleAdmin.css';

class PaginationMenu extends Component {
	componentDidMount = async (props) => {};
	render() {
		return (
			<React.Fragment>
				<Pagination defaultActivePage={5} totalPages={10} />
			</React.Fragment>
		);
	}
}

export default connect('', actions)(withRouter(PaginationMenu));
