import React, { Component } from 'react';
import { Button } from 'antd';
import Toolbar from './Toolbar';

class SimulatorToolbar extends Component {
  render() {
    return (
      <Toolbar backgroundColor="teal">
        <Button id="reset" icon="reload" onClick={this.props.onReset}>Сбросить</Button>
      </Toolbar>
    )
  }
}

export default SimulatorToolbar;
