import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {Tester} from './test';
const Page = document.getElementById('root');

ReactDOM.render(

  <React.StrictMode>
  <Tester />
  </React.StrictMode>
  ,Page);