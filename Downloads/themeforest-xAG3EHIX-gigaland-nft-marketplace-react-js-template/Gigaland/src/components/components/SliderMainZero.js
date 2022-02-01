import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const slidermainzero= (props) => (
 <div className="container">
   {console.log(props.marketID)}
    <div className="row align-items-center">
          <div className="col-md-6 m-auto">
              <div className="spacer-single"></div>
              <div className="spacer-double"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={300} duration={600}>
              <h1 className="text-center">/m/{props.marketID}</h1>
              </Reveal>
              <Reveal className='onStep' keyframes={fadeInUp} delay={600} duration={600}>
              <p className="lead text-center">
              Easiest place to buy and sell cryptocurrency. <br/>Sign up and get started today.
              </p>
              </Reveal>
              <div className="spacer-10"></div>
              <Reveal className='onStep' keyframes={fadeInUp} delay={800} duration={600}>
              <div className='d-flex justify-content-center'>
                <span onClick={()=> window.open('/swap', "_self")} className="btn-main inline lead">Swap</span>
                <span onClick={()=> window.open(`/m/${props.marketID}/create`, "_self")} className="btn-main inline white lead mx-0">Create</span>
              </div>
              <div className="spacer-single"></div>
              <div className="spacer-double"></div>
              </Reveal>
          </div>
      </div>
    </div>
);
export default slidermainzero;