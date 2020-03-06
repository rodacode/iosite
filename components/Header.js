import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faKeyboard from '@fortawesome/fontawesome-free-regular/faKeyboard'

const Header = (props) => {
    const [phrase, setPhrase] = useState('api');
    const phrases = ['api', 'ecommerce', 'site'];
    let counter = 0;
    useEffect(() => {
      const interval = setInterval(() => {
        counter ++;
        if (counter >= phrases.length) counter=0;
        setPhrase(phrase => phrases[counter]);
      }, 1500);
      return () => clearInterval(interval);
    }, []);
    return (
        <header id="header" style={props.timeout ? { display: 'none' } : {}}>
            <div className="logo">
                {/*<span className="icon fa-diamond"></span>*/}
                <FontAwesomeIcon icon={faKeyboard} transform="grow-18" />
            </div>
            <div className="content">
                <div className="inner">
                    <h1>Invisible Objects</h1>
                    <div className="subtitle"><p>We create<span>your {phrase}</span></p></div>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                    <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Works</a></li>
                    <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                    <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
