import React, { Component } from 'react';
import fb from './img/social_media/fb.png';
import dribble from './img/social_media/dribble.png';
import pinterest from './img/social_media/pinterest.png';
import behance from './img/social_media/behance.png';

class Footer extends Component {
  render() {
    return (
        <footer className="footer-distributed">
            <article className="footer-icons">
                <a href="https://www.facebook.com/"><img src={behance} alt="behance icon" /></a>
                <a href="https://www.facebook.com/"><img src={fb} alt="facebook icon" /></a>
                <a href="https://www.dribble.com/"><img src={dribble} alt="dribble icon" /></a>
                <a href="https://www.pinterest.com/"><img src={pinterest} alt="pinterest icon" /></a>
                <p>kunikasharma92@gmail.com</p>
                <p className="footer-copyrights"> &copy; KUNIKA SHARMA 2018 </p>
            </article>
        </footer>
    );
  }
}

export default Footer;