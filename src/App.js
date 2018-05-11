import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScrollSection, ScrollContainer } from './components/scroll';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollContainer>
          <ScrollSection style={{
            backgroundImage: 'url(http://www.thepetedesign.com/demos/phones.png)',
            backgroundRepeat: 'no-repeat'
          }}
            pageId={0}>
            <a href="https://github.com/DawnyWu/react-onepage-scroll">
              <img style={{ position: 'absolute', top: 0, right: 0, border: 0, zIndex: 999 }} src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" alt="Fork me on GitHub" />
            </a>
          </ScrollSection>

          <ScrollSection style={{
            backgroundImage: 'url(http://www.thepetedesign.com/demos/back-phone.png)',
            backgroundRepeat: 'no-repeat'
          }}
            pageId={1}>
          </ScrollSection>

          <ScrollSection style={{
            backgroundImage: 'url(http://www.thepetedesign.com/demos/tilted-phone.png)',
            backgroundRepeat: 'no-repeat'
          }}
            pageId={2}>
          </ScrollSection>
        </ScrollContainer>
      </div>  
    );
  }
}

export default App;
