import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import DisplayTable from './DisplayTable';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={App} />
    <Route path='/display-data' Component={DisplayTable}/>

    </Routes>
    </BrowserRouter>
    </React.StrictMode>
);

