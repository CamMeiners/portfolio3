import React from 'react';

function Logo({ page, setPage }) {
  return (
    <h1
      onClick={console.log('bruh1')}
      className="logo"
      style={{
        border: '1px solid #e3e4db',
        padding: '0.5%',
        fontSize: '200%',
      }}
      draggable="true"
    >
      cm
    </h1>
  );
}
export default Logo;
