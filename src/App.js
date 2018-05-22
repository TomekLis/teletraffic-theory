import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollSection, ScrollContainer } from './components/scroll';
import LineExample from './components/charts/line'
import ParticlesComponent from './components/particles/particles';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <ParticlesComponent />
        <ScrollContainer>
          <ScrollSection
            pageId={0}>
            <div className="row">
              <div className="offset-2 col-md-8 mainTitle">
                <h1>Program do wyznaczania GNR</h1>
                <h2>TCBH, ADPH (ADPQH, ADPFH), FDMP, FDMH</h2>
              </div>
            </div>
          </ScrollSection>
          <ScrollSection
            pageId={1}>
            <div className="row">
              <div className="col-md-6">
                <h1>Program do wyznaczania GNR (TCBH, ADPH (ADPQH, ADPFH), FDMP, FDMH)</h1>
              </div>
              <div className="col-md-6">
                <LineExample />
              </div>
            </div>
          </ScrollSection>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
