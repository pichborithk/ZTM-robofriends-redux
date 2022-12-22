import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '3px solid purple',
        height: '400px',
        margin: '2% 5%',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
