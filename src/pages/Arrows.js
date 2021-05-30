import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import "./Arrows.css"
import upArrow from '../img/uparrow.svg';
import downArrow from '../img/downarrow.svg';

const Arrows = ({mapping}) => {

    let index = 1;

    function scrollUp() {
        hideUp();
        hideDown();
        index -= 1;
        console.log(index);
        scroll.scrollMore(-700);
        setTimeout(() => {
            if (index !== 1) {
                showUp();
            }
            if (index !== 10) {
                showDown();
            }
        }, 1000);
    }

    function scrollDown() {
        hideUp();
        hideDown();
        index += 1;
        console.log(index);
        scroll.scrollMore(700); 
        setTimeout(() => {
            if (index !== 1) {
                showUp();
            }
            if (index !== 10) {
                showDown();
            }
        }, 1000);
    }

    function hideUp() {
        document.getElementById("up-arrow").classList.add("hidden");
    }

    function hideDown() {
        document.getElementById("down-arrow").classList.add("hidden");
    }

    function showUp() {
        document.getElementById("up-arrow").classList.remove("hidden");
    }

    function showDown() {
        document.getElementById("down-arrow").classList.remove("hidden");
    }

    return(
        <div className="elements">
            <img onClick={scrollUp} id="up-arrow" alt="up arrow" className="arrow hidden" src={upArrow}/>
            <img onClick={scrollDown} id="down-arrow" alt="down arrow" className="arrow" src={downArrow}/>
        </div>
    );
}

export default Arrows;
