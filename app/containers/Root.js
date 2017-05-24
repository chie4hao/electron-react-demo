import React, { Component } from 'react';
import styles from './Root.css';

function Repeat(props) {
  const items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div className={styles.blue}>{items}</div>;
}


export default function App() {
  return (
    <Repeat numTimes={10}>
      {(index) => <div key={index}> {index} </div>}
    </Repeat>
  );
}

