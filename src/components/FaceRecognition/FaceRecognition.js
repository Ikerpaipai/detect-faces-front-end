import React from "react";
import './FaceRecognition.css'

const FaceRecognition =({imageURL, box})=>{
    return(
        <div className="imagecontainer center">
            <img id="inputimage" src={imageURL} alt="" width= '500px' height='auto'/>
            <div className="bounding-box" style={{top: box.topRow, right: box.rigthCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    );
}

export default FaceRecognition