import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollSection, ScrollContainer } from './components/scroll';
import LineExample from './components/charts/line'
import ParticlesComponent from './components/particles/particles';
import 'bootstrap/dist/css/bootstrap.css';
import TitlePage from './components/pages/TitlePage'
import IntroductionPage from './components/pages/IntroductionPage'

class App extends Component {
  render() {
    return (
      <div>
        <ParticlesComponent />
        <ScrollContainer>
          <ScrollSection
            pageId={0}>
            <TitlePage />
          </ScrollSection>
          <ScrollSection
            pageId={1}>
            <IntroductionPage />
          </ScrollSection>
          <ScrollSection
            pageId={2}>
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
