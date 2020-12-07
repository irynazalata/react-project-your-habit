import React from 'react';
import UserContext from '../../context/Context';

const withContext = WrappedComponent => {
  return function WithContext(props) {
    return (
      <UserContext.Consumer>
        {context => <WrappedComponent {...props} {...context} />}
      </UserContext.Consumer>
    );
  };
};

export default withContext;
