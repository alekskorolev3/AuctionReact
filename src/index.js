import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <ConfigProvider theme={{
            token: {
                fontFamily: 'Euclid Circular A, serif',
                colorPrimary: '#9772FB'
            }
        }}>
            <App />
        </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

