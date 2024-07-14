import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import StateForm from './StateForm';
import CityForm from './CityForm';
import CustomerReg from './CustomerReg';
import CustomerLogin from './CustomerLogin';
import CustomerHome from './CustomerHome';
import VenderHome from './VenderHome';
import VenderLogin from './VenderLogin';
import SaveProduct from './SaveProduct';
import ProductList from './ProductList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StateForm/> */}
    {/* <CityForm/> */}
    {/* <ProductList/> */}
    {/* <CustomerReg/> */}
    {/* <CustomerLogin/> */}
    <CustomerHome/>
    {/* <SaveProduct/> */}
    {/* <VenderLogin/> */}
    {/* <ProductList/> */}
    {/* <VenderHome/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
