import React from "react";
import "./Photos.css";

 export default function Photos (props){
    if (props.photos) {
    return (
        <section className="Photos">
            <div className="row"/>
            {props.photos.map(function (Photos, index){
            return(
                <div className="col-4" key={index}>
                  <a href={Photos.src.original}  target="_blank" rel="noreferrer">  

                    {/* This is a comment inside JSX */}       
                       <img src="https://images.pexels.com/photos/269583/seashore.jpg" alt="Seashore" 

            className="img-fluid"/>
             </a>
       </div>
            );
    })}
 </section>
    );
 } else {
    return null;
 }
 }
 