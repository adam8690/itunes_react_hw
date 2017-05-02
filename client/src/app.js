import React from 'react';
import ReactDOM from 'react-dom';
import Top20Container from './containers/Top20Container.jsx';

window.onload = function () {
  ReactDOM.render(
    <Top20Container />,
    document.getElementById('app')
  );
};
