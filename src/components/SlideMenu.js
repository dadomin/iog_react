import React from "react";
import { Component } from "react";
import $ from 'jquery';

class SlideMenu extends Component {
    render() {

        function closeMenu() {
            let slide_menu = document.querySelector("#slide_menu");
            $(slide_menu).animate({
                left: "-100%",
                opacity : 0,
                display : "none"
            },900,"linear");
            $("#in").animate({
                padding: '30px 50px'
            }, 300, 'linear');
            $("#open_slide_menu").fadeIn(700);
        }

        function menuScroll(e) {
            let idx = $("#menu > li").index(e.target);
            document.querySelectorAll("#menu > li").forEach(function(el, idx){
                if($(el).hasClass('active')){
                    $(el).removeClass('active');
                }
            });
            $("#menu > li").eq(idx).addClass('active');
            let t = $(".main_page").eq(idx).position().top;
            $("html").animate({ scrollTop: `${t}` });
        }
        

        return (
            <section id="slide_menu">
                <a id="logo">IOG 거래 통계 화면</a>
                <button id="close_slide_menu" onClick={closeMenu}><i className="fa-solid fa-angle-left"></i></button>

                <ul id="menu">
                    <li onClick={menuScroll} className="active">전문변환플랫폼 거래통계</li>
                    <li onClick={menuScroll}>초당 거래 건수</li>
                    <li onClick={menuScroll}>거래당 소요시간</li>
                </ul>

                <div className="back_circle circle1"></div>
                <div className="back_circle circle2"></div>
                <div className="back_circle circle3"></div>
                
            </section>
            
        )
    }
}

export default SlideMenu;