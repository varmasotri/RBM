import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function App(){
 return (
  <div className='app'>
   <h1>₹ Raj Budget Manager (RBM)</h1>
   <h3>Manage Every Rupee. Build Your Future.</h3>
   <div className='card'>
    <h2>Welcome, Raj 👋</h2>
    <p>This is the starter project for your personal finance app.</p>
    <ul>
      <li>Dashboard</li>
      <li>Income</li>
      <li>Expenses</li>
      <li>Credit Cards</li>
      <li>EMIs</li>
      <li>Electricity Bills</li>
      <li>Reports</li>
    </ul>
   </div>
  </div>
 );
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
