import React from 'react';
import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
//import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href='https://www.linkedin.com/in/thembamasilela/' target="blank"><BsLinkedin /></a>
    </div>
    <div>
      <a href='https://github.com/ThembaMasilela' target="blank"><BsGithub /></a>
    </div>
    <div>
    <a href='https://www.instagram.com/themba_nel/' target="blank"><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
