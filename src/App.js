import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollSection, ScrollContainer } from './components/scroll';
import ParticlesComponent from './components/particles/particles';
import 'bootstrap/dist/css/bootstrap.css';
import TitlePage from './components/pages/TitlePage';
import IntroductionPage from './components/pages/IntroductionPage';
import DataSetsPage from './components/pages/DataSetsPage';

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
              <DataSetsPage/>
          </ScrollSection>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
