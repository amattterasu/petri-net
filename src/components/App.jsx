import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import EditorContainer from '../containers/EditorContainer';
import SimulatorContainer from '../containers/SimulatorContainer';
import Topbar from './Topbar';
import './App.scss';

const App = () => {
  return (
    <>
      <Layout className="outer_layout">
        <Layout>
          <Topbar />
          <Route path="/:id/edit" component={EditorContainer} />
          <Route path="/:id/simulate" component={SimulatorContainer} />
        </Layout>
      </Layout>
    </>
  );
}

export default App;
