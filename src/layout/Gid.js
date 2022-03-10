import React from "react";
import { Component } from "react";

class Gid extends Component {
    render() {
        return (
            <div className="main_page">
                <h2>거래당 소요시간</h2>
                <div className="input_box">
                    <span>GID</span>
                    <input type="text" placeholder="GID 입력"/>
                    <button className="btn"><a href="#">검색</a></button>
                </div>
            </div>
        );
    }
}

export default Gid;