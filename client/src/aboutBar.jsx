/* eslint-disable react/prop-types */
import React from 'react';

function About(props) {
  const { amount } = props;
  return (
    <div style={{ padding: 12, margin: 13, borderBottom: '1px solid gray' }}>
      <h2 style={{ margin: '0px auto 20px auto', display: 'table' }}>About this item</h2>
      <ul style={{ margin: '0px auto', display: 'table' }}>
        <li style={{
          display: 'inline',
          padding: '10px 0px',
          borderBottom: '3px solid transparent',
          margin: '0px 20px',
        }}
        >
          Details
        </li>
        <li style={{
          display: 'inline',
          padding: '10px 0px',
          borderBottom: '3px solid transparent',
          margin: '0px 20px',
        }}
        >
          Shipping & Returns
        </li>
        <li style={{
          display: 'inline',
          padding: '10px 0px',
          borderBottom: '3px solid transparent',
          margin: '0px 20px',
        }}
        >
          Parental info
        </li>
        <li style={{
          fontWeight: 'bold',
          display: 'inline',
          padding: '10px 0px',
          borderBottom: '3px solid red',
          margin: '0px 20px',
        }}
        >
          {`Q&A (${amount})`}
        </li>
      </ul>
    </div>
  );
}

export default About;
