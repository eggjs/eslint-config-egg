import ReactDOM from 'react-dom';
import React from 'react';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

HelloMessage.defaultProps = {
  name: '',
};
HelloMessage.propTypes = {
  name: React.PropTypes.string,
};

ReactDOM.render(
  <HelloMessage name="John" />,
  document.getElementById('container')
);
