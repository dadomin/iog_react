import React from "react";
import { Component } from "react";
import axios  from 'axios';
import $ from 'jquery';

const Total = ()=> {
        
        const getData = ()=>{
            
            axios
            .get('http://localhost:3787/')
            .then((res) => {
                console.log(res.data[0]);
               $(".please").text(res.data[0].damin1);
            })

        }
        getData();
        
        
        return (
            <div className="main_page">
                <h2>전문변환플랫폼 거래통계</h2>
                <div className="count_total">
                    <div>
                        <p>총 건수</p>
                        <h1 className="please"></h1>
                        <b className="blue"><i className="fa-solid fa-caret-down"></i>113</b>
                    </div>
                    <div>
                        <p>5초 이상 거래 건수</p>
                        <h1>52</h1>
                        <b className="red"><i className="fa-solid fa-caret-up"></i>37</b>
                    </div>
                    <div>
                        <p>에러 건수</p>
                        <h1>21</h1>
                        <b className="red"><i className="fa-solid fa-caret-up"></i>6</b>
                    </div>
                </div>
            </div>
        )
    
}

export default Total;