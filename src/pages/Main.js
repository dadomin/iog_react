import React, {Component} from "react";
import $ from 'jquery';
import Chart from 'chart.js';
import { Link } from "react-router-dom";
import SlideMenu from "../components/SlideMenu";
import SelectZone from "../layout/SelectZone";
import { useState } from "react";
import Total from "../layout/Total";
import Seconds from "../layout/Seconds";
import Gid from "../layout/Gid";
import CloseMenu from "../components/CloseMenu";

const Main = () => {

    const [ScrollY, setScrollY] = useState(0);
    
    const handleFollow = (e) => {
        setScrollY(window.pageYOffset);
        for(let i = 0; i < 3; i ++) {
            let t = $(".main_page").eq(i).position().top - 100;
            if(ScrollY > t) {
                document.querySelectorAll("#menu > li").forEach(function(el, idx){
                    if($(el).hasClass('active')){
                        $(el).removeClass('active');
                    }
                });
                $("#menu > li").eq(i).addClass('active');
            }
    
        }
    }
    const watch = () => {
        window.addEventListener('scroll', handleFollow)
    }
    watch();
            
    return (
        <section id="include">
            <SlideMenu/>

            <section id="in">

                <SelectZone/>
                <Total/>
                <Seconds/>
                <Gid/>

            </section>
            <CloseMenu/>
        </section>
        
    )
}

export default Main;
