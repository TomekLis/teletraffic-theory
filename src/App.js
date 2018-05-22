import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollSection, ScrollContainer } from './components/scroll';
import LineExample from './components/charts/line'

class App extends Component {
  render() {
    return (
      <div>
        <ScrollContainer>
          <ScrollSection
          pageId={0}>
            				<LineExample />
          </ScrollSection>
        </ScrollContainer>
      </div>  
    );
  }
}

export default App;
