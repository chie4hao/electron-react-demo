import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './app.global.css';


render(
  // <AppContainer>
    <div>
      123
    </div>,
  // </AppContainer>,
  document.getElementById('root')
);
/*
if (module.hot) {
  console.log(1);
}
*/
