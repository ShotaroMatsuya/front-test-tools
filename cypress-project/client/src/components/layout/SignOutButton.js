import React from 'react';
import PropTypes from 'prop-types';

const SignOutButton = ({ logout }, context) =>
  context.auth.loggedIn ? (
    <button
      data-cy="signout-button"
      className="button"
      onClick={() => {
        logout().then(() => {
          //   context.router.transitionTo('/');
          context.router.history.push('/notloggedin');
        });
      }}
    >
      Sign out
    </button>
  ) : null;

SignOutButton.contextTypes = {
  router: PropTypes.object,
  auth: PropTypes.object,
};

SignOutButton.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default SignOutButton;
