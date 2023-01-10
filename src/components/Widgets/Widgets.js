import React, { useState } from 'react';
import BurgerMenu from './BurgerMenu';
import Home from './Home/Home';
import IPTracer from './IPTracer/IPTracer';
import Triangle from './SierpinskiTriangle/Triangle';
import TicTacToe from './TicTacToe/TicTacToe';
function Widgets() {
  const [page, setPage] = useState(1);
  return (
    <div>
      <BurgerMenu page={page} setPage={setPage} />
      {page === 1 && <Home />}
      {page === 2 && <IPTracer />}
      {page === 3 && <TicTacToe />}
      {page === 4 && <Triangle />}
    </div>
  );
}
export default Widgets;
