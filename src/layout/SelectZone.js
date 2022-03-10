import React from "react";
import { Component } from "react";
import $ from 'jquery';

class SelectZone extends Component {
    render() {
        return (
            
            <div className="select_zone">
                <div className="select_boxes">
                    <div>
                        <span>시작 날짜</span>
                        <input type="date"/>
                    </div>
                    <div>
                        <span>종료 날짜</span>
                        <input type="date"/>
                    </div>
                    <div>
                        <span>시작 시간</span>
                        <input type="time"/>
                    </div>
                    <div>
                        <span>종료 시간</span>
                        <input type="time"/>
                    </div>
                </div>
                <button className="btn"><a href="#">검색</a></button>
            </div>
        )
    }
}

export default SelectZone;