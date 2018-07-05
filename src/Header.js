import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="page-header">
           <div className="hero">
               <nav className="nav-bar">
                    <ul>
                        <li><a href="#service">SERVICES</a></li>
                        <li><a href="#work">PORTFOLIO</a></li>
                    </ul>
               </nav>
               <div className="hero-heading">
                   <h1>Kunika Sharma</h1>
                   <h2>Web Designer & Developer</h2>
                   <h2>kunikasharma92@gmail.com</h2>
               </div>
           </div>
       </header>
    );
  }
}

export default Header;