import React, { Component } from 'react';
// import styles from './Root.css';

function doge (target) {
  target.isDoge = "sl";
}

@doge
class Dog {}

export default function App() {
  return (
    <div>
      {Dog.isDoge}
    </div>
  );
}

