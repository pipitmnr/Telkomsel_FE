import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions} from '../store';
import '../styles/bootstrap.min.css';
import '../styles/pageTitle.css';

class PageTitle extends Component {
  componentDidMount = async () => {};
  render() {
    return (
      <React.Fragment>
        <div className='container-fluid'>
          <div className='row align-items-center page-title'>
            <div className='col-md-6 page-title-entry'>
              {this.props.pageTitle}
            </div>
            <div className='col-md-6'>
              <div className='row align-items-center'>
                <div className='col-md-7'></div>
                <div className='col-md-5 text-center'>
                  <div className='page-title-box'>
                    <div className='page-title-box-entry'>
                      <Link to='/checkout'>
                        {' '}
                        <div>
                          Belanjaan Kamu{' '}
                          <span
                            class='fa-stack fa-2x has-badge'
                            data-count={
                              localStorage.getItem('cart_value') === null
                                ? '0'
                                : this.props.cartValue
                            }
                          >
                            <i class='fa fa-shopping-cart fa-stack-2x red-cart'></i>
                          </span>{' '}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect('cartValue', actions)(withRouter(PageTitle));
