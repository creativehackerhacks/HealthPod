import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './pages/routes/Routes'

ReactDOM.render(
  // <React.StrictMode> 
  //   <App />
  // </React.StrictMode>,

  <Router>
    <div className="App">
      <Routes />
    </div>
  </Router>,
  document.getElementById('root')
);


// let root = document.createElement('div')
// root.id = 'root'
// document.body.appendChild(root)

// render(<App />, document.getElementById('root'))

// CJECL

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
