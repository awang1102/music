import React from 'react';
import "./Arrows.css"
import upArrow from '../img/uparrow.svg';
import downArrow from '../img/downarrow.svg';

const Arrows = () => {
    return(
        <div className="elements">
            <img className="arrow up-arrow" src={upArrow}/>
            <img className="arrow down-arrow" src={downArrow}/>
        </div>
    );
}

export default Arrows;
