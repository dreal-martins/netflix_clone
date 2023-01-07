import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import '../styles/Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavbar = () => {
    if (window.scrollY > 200) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar);
    return () => window.removeEventListener('scroll', transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__content">
        <img
          onClick={() => history.push('/')}
          className="nav__logo"
          src="https://pngimg.com/uploads/netflix/small/netflix_PNG25.png"
          alt="Netflix"
        />

        <img
          onClick={() => history.push('/profile')}
          className="nav__avater"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
