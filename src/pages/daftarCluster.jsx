import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../styles/sidebar.css';
import Sidebar from '../components/sidebar';

class Home extends Component {
  componentDidMount = async () => {};

  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-3 col-sidebar'>
              <Sidebar />
            </div>
            <div className='col-md-9'>INI DAFTAR CLUSTER</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect('', actions)(withRouter(Home));
