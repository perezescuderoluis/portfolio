import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';

class Hello extends React.Component {
  render() {
    return <Button label="Hello World!" />
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'));
