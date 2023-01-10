import React from 'react';
import './MobileNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function MobileNavbar({ page, setPage }) {
  function handleOpenMenu() {
    document.getElementById('menu').style.width = '9rem';
  }
  function handleCloseMenu() {
    document.getElementById('menu').style.width = '0px';
  }
  return (
    <div className="mobileNavbar">
      <div className="mobileNavContent">
        <div className="burgerMenu" id="burgerMenu">
          <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
        </div>
        <div className="menu" id="menu">
          <FontAwesomeIcon
            className="closeIcon"
            icon={faXmark}
            onClick={handleCloseMenu}
          />
          <div className="links">
            <p
              onClick={() => {
                setPage(1);
                handleCloseMenu();
              }}
              draggable
            >
              home
            </p>
            <p
              onClick={() => {
                setPage(2);
                handleCloseMenu();
              }}
              draggable
            >
              about
            </p>
            <p
              onClick={() => {
                setPage(3);
                handleCloseMenu();
              }}
              draggable
            >
              contact
            </p>
          </div>
        </div>
        <h1 className="logo" draggable="true" onClick={() => setPage(1)}>
          cm
        </h1>
      </div>
    </div>
  );
}

export default MobileNavbar;
