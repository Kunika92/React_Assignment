import React, { Component } from 'react';
import WDicon from './img/service_icons/WDicon.png';
import printer_icon from './img/service_icons/printer_icon.png';
import App_icon from './img/service_icons/App_icon.png';

class Services extends Component {
  render() {
    return (
        <div className="row">
            <article className="col-md-4 col-sm-1 services-article">
                <img className="service-icon" src={WDicon} alt="website-design-icon" />
                <h4>WEB/PRINT DESIGN</h4>
                <p>Building an experience that give users what they are looking for and keep them engaged and entertained at the same time. Being facinated by the technology innovations, product branding and typography.
                </p>
            </article>

            <article className="col-md-4 col-sm-1 services-article">
                <img className="service-icon" src={printer_icon} alt="website-design-icon" />
                <h4>UX/UI DESIGN</h4>
                <p>To offer my design skills to build awesome websites and mobile applications in line with the ambition of their owners. I love to see new standards appear and mature allowing the creation of new website, each one more advanced and amazing than the previous.</p>
            </article>

            <article className="col-md-4 col-sm-1 services-article">
                <img className="service-icon" src={App_icon} alt="website-design-icon" />
                <h4>WEB/APP DEVELOPMENT</h4>
                <p>Combining the best of the web and app world to create an experience that's entertaining and fun. Along with my design skills, my toolbox is filled with acronyms such as HTML5, CSS3 , Javascript, JQuery and PHP. </p>
            </article>
        </div>
    );
  }
}

export default Services;