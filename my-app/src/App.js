import React from 'react';
import './App.css';
import Jumbotron from './Component/Header/Jumbotron';
import Navbar from './Component/Header/Navbar';
import AboutMe from './Component/Content/AboutMe';
import TitleHeading from './Component/Content/TitleHeading';
import Footer from './Component/Footer/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <Jumbotron />
          <Navbar />
        </header>

        <div class="container" style={{ marginTop: '30px' }}>
          <div class="row">
            <AboutMe />
            <TitleHeading />
          </div>
        </div>

        <Footer />
      </div >
    );
  }
}

export default App;

