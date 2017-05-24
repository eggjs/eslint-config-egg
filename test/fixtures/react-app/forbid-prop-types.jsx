import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  render() {
    return <div>{ this.props.children }</div>;
  }
}

Home.propTypes = {
  children: PropTypes.object,
};

export default Home;
