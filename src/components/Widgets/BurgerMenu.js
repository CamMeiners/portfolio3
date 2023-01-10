import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './BurgerMenu.css';
function BurgerMenu({ page, setPage }) {
  function handleOpenMenu() {
    document.getElementById('menu').style.width = '200px';
  }
  function handleCloseMenu() {
    document.getElementById('menu').style.width = '0px';
  }

  return (
    <div>
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
            Home
          </p>
          <p
            onClick={() => {
              setPage(2);
              handleCloseMenu();
            }}
            draggable
          >
            IP Tracker
          </p>
          <p
            onClick={() => {
              setPage(3);
              handleCloseMenu();
            }}
            draggable
          >
            Tic Tac Toe
          </p>
          <p
            onClick={() => {
              setPage(4);
              handleCloseMenu();
            }}
            draggable
          >
            Sierpinski
            <br /> Triangle
          </p>
        </div>
      </div>
    </div>
  );
}
export default BurgerMenu;
