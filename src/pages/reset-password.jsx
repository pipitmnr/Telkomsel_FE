import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import {connect} from 'unistore/react';
import {actions, store} from '../store';
import {Grid, Image, Form, Input, Button, Item} from 'semantic-ui-react';
import Footer from '../components/footer';
import LoginLogo from '../images/Telkomsel_Logo.svg';
import '../styles/resetPassword.css';

class ResetPassword extends Component {
  componentDidMount = async () => {};

  handleChange = (event) => {
    store.setState({[event.target.name]: event.target.value});
    localStorage.setItem('emailReset', this.props.username);
  };

  handleSubmit = () => {
    // this.props.history.push('/daftar-cluster');
  };

  render() {
    return (
      <React.Fragment>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}></Grid.Column>
            <Grid.Column width={8}>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={16}>
                    <Image fluid className='logo-reset-pass' src={LoginLogo} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row className='text-reset'>
                  <h2 className='title-reset'>Reset Password</h2>
                  <span className='title-desc'>
                    Please enter your email address to request a password reset
                    for your account
                  </span>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}></Grid.Column>
                  <Grid.Column width={12}>
                    <Form onSubmit={this.handleSubmit} size='massive'>
                      <Form.Field inline>
                        <Input
                          transparent
                          className='input-reset'
                          placeholder='Your Email'
                          name='emailReset'
                          value={this.props.email}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </Form.Field>
                    </Form>
                  </Grid.Column>
                  <Grid.Column width={2}></Grid.Column>
                </Grid.Row>
                <Grid.Row className='button-reset'>
                  <Button negative>Send Reset Password</Button>
                  <Item.Content
                    className='back-to-login'
                    verticalAlign='middle'
                  >
                    <Link to='/login-admin'>
                      &#8592; OR GO BACK TO LOGIN SCREEN
                    </Link>
                  </Item.Content>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={4}></Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row className='footer-reset'>
            <Footer />
          </Grid.Row>
        </Grid>
      </React.Fragment>
    );
  }
}

export default connect('emailReset', actions)(withRouter(ResetPassword));
