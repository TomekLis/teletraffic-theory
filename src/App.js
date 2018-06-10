import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollSection, ScrollContainer } from './components/scroll';
import ParticlesComponent from './components/particles/particles';
import 'bootstrap/dist/css/bootstrap.css';
import TitlePage from './components/pages/TitlePage';
import IntroductionPage from './components/pages/IntroductionPage';
import DataSetsPage from './components/pages/DataSetsPage';
import AdphMethodPage from './components/pages/AdphMethodPage'
import TcbhMethodPage from './components/pages/TcbhMethodPage'
import FdmhMethodPage from './components/pages/FdmhMethodPage'
import BusyHourMethodsPage from './components/pages/BusyHourMethodsPage'

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
          <ScrollSection pageId={2}>
            <BusyHourMethodsPage/>
          </ScrollSection>
          <ScrollSection
            pageId={3}>
            <AdphMethodPage />
          </ScrollSection>
          <ScrollSection
            pageId={4}>
            <TcbhMethodPage />
          </ScrollSection>
          <ScrollSection pageId={5}>
            <FdmhMethodPage />
          </ScrollSection>
          <ScrollSection
            pageId={6}
          >
            <DataSetsPage />
          </ScrollSection>
        </ScrollContainer>
      </div>
    );
  }
}

export default App;
