import React, { Component } from 'react';
import { Layout } from 'antd';
import ModeMenu from './ModeMenu';
import './Topbar.scss';

const { Header } = Layout;

class Topbar extends Component {
  render() {
    return (
      <Header className="topbar">
        <ModeMenu />
      </Header>
    );
  }
}

export default Topbar;
