import React, {Component} from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import Chart from 'chart.js';
import { Link } from "react-router-dom";
import Main from '../pages/Main';
import axios from "axios";
import { useEffect } from "react";


function App() {
  
        return (
            <div>
                
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}></Route>
                </Routes>
            </BrowserRouter>
            
            </div>
        )
    
}

export default App;
