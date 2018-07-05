import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Services from './Services';
import Work from './Work';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main className="container">
          <section id="service">
            <h2 class="sub-heading">SERVICES</h2>
            <Services />
          </section>
          <section id="work">
            <h2 class="sub-heading">PORTFOLIO</h2>
            <Work />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
