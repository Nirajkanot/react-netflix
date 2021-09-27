import React from 'react';
import Images from './Images';
import Headings from './Headings';

function Card(props) {
   
    return (
        <>
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc}/>
                <div className="card_info">
                    <span className="card_category"> {props.title} </span>
                    <Headings sname={props.sname}/>
                    <a href={props.link} rel="noreferrer" target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
            
        </div>
        </>

    );
}

export default Card;