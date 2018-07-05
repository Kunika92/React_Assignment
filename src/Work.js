import React, { Component } from 'react';

import box_spring from './img/recent_work/box_spring.jpg';
import boxSpring_colorlogo from './img/recent_work/boxSpring_colorlogo.jpg';
import boxSpring_logo from './img/recent_work/boxSpring_logo.jpg';
import tankards from './img/recent_work/tankards.jpg';
import tankard_logo from './img/recent_work/tankard_logo.jpg';
import Hours from './img/recent_work/Hours.jpg';

class Work extends Component {
  render() {
    return (
        <div>
            <div className="row">
                    <article className="col-md-4 col-sm-12 work-article">
                        <div className="img-container">
                        	<img className="work-img" src={box_spring} alt="Mockup Design" />
                        </div>
                        <p>BOX SPRING STUDIO</p>
                        <p className="blue">Web design | Development | Branding</p>
                    </article>

                    <article className="col-md-4 col-sm-12 work-article">
                    	<div className="img-container">
                        	<img className="work-img" src={boxSpring_colorlogo} alt="Typography Letter Form" />
                        </div>
                        <p>BOX SPRING STUDIO</p>
                        <p className="blue">Logo design | Branding</p>
                    </article>

                    <article className="col-md-4 col-sm-12 work-article">
                    	<div className="img-container">
                        	<img className="work-img" src={boxSpring_logo} alt="Website Mockupt Design" />
                        </div>
                        <p>BOX SPRING STUDIO</p>
                        <p className="blue">Logo design | Branding</p>
                    </article>
                </div>

                <div className="row">
                    <article className="col-md-4 col-sm-12 work-article">
                    	<div className="img-container">
                        	<img className="work-img" src={tankards} alt="Website Mockupt Design" />
                        </div>
                        <p>TANKARDS ASSOCIATES</p>
                        <p className="blue">Web design | Development | Branding</p>
                    </article>

                    <article className="col-md-4 col-sm-12 work-article">
                        <div className="img-container">
                        	<img className="work-img" src={tankard_logo} alt="Mockup Design" />
                        </div>
                        <p>TANKARDS ASSOCIATES</p>
                        <p className="blue">Logo design | Branding</p>
                    </article>

                    <article className="col-md-4 col-sm-12 work-article">
                        <div className="img-container">
                        	<img className="work-img" src={Hours} alt="Typography Letter Form" />
                        </div>
                        <p>TYPOGRAPHY POSTER</p>
                        <p className="blue">Print Design | Typography</p>
                    </article>
                </div>
        </div>
    );
  }
}

export default Work;