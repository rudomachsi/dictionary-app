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

                     // eslint-disable-next-line         
                       <img src="https://www.pexels.com/photo/seashore-269583/', photographer: 'Pixabay', …}" alt="Sea shore" 
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
 <img src="image_url.jpg" alt="Description of the image" />