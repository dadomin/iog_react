import React from "react";
import { Component } from "react";
import $ from 'jquery';

class CloseMenu extends Component {
    
    render() {
        
        function openMenu() {
            $("#slide_menu").animate({
                left: 0,
                opacity : 1,
                display: "block"
            },900,"linear");
            $("#in").animate({
                padding: '30px 50px 30px 400px'
            }, 300, 'linear');
            $("#open_slide_menu").hide();
        }

        return (
            
            <button id="open_slide_menu" onClick={openMenu}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
            
        );
    }
}

export default CloseMenu;