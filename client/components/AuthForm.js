import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../store';
import GoogleButton from 'react-google-button';
import { Form, FormGroup, Label, Button, Input } from 'reactstrap';
import Footer from '../logged_out/components/footer/Footer';

/**
 * COMPONENT
 */
const AuthForm = ({ name, displayName, handleSubmit, error }) => {
  useEffect(() => {
    if (document.cookie.includes('token')) {
      console.log('setting token');
      window.localStorage.setItem('token', document.cookie.split('=')[1]);
      document.cookie = '';
    }
  }, []);

  return (
    <div className='authContainer'>
      <div className='auth'>
        <div className='authForm'>
          <Form onSubmit={handleSubmit} name={name}>
            <FormGroup>
              <Label htmlFor='email'>
                <small>Email</small>
              </Label>
              <Input name='email' type='text' />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='password'>
                <small>Password</small>
              </Label>
              <Input name='password' type='password' />
            </FormGroup>
            <Button className='authBtn' type='submit'>
              {displayName}
            </Button>
            {error && error.response && <div> {error.response.data} </div>}
            <a href=''>Forgot your password?</a>
          </Form>
          <div className='authSocialLinks'>
            {/* <GoogleButton type="dark"/> */}
            <a href='/auth/google'>
              <Button className='socialBtn' color='warning'>
                Authenticate with Google
              </Button>
            </a>
            <br />
            <a href='/auth/linkedin'>
              <Button className='socialBtn' color='primary'>
                Authenticate with LinkedIn
              </Button>
            </a>
            <br />
            <a href='/auth/twitter'>
              <Button className='socialBtn' color='success'>
                Authenticate with Twitter
              </Button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'LOG IN',
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'SIGN UP',
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(authenticate(email, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);
