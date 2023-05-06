import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { Route, BrowserRouter as Router } from 'react-router-dom'  
// import Home from './components/Home'
// import Contact from './components/Contact';
// import About from './components/About';
// const routing = (  
//   <Router>  
//     <div>  
//       <h1>React Router Example</h1>  
//       <Route path="/" component={App} />  
//       <Route path="/about" component={About} />  
//       <Route path="/contact" component={Contact} />  
//       <Route path="/home" component={Home} />  

//     </div>  
//   </Router>  
// )  
// ReactDOM.render(routing,document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
