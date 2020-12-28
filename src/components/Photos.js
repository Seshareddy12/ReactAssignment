import React, { useEffect, useState } from 'react';
import '../photos.css';
import Photo from './Photo';

const Admin = () => {

    const[images,setImages] = useState([]);

    
    useEffect(()=>{
       
        const images = JSON.parse(localStorage.getItem("images"))
        setImages(images)
    },[])
    return (
        <div>
        <h2 style={{textAlign:"center"}}> Photo Gallery </h2>
        <br/>
        <ul style={{listStyleType:"none"}} id="images">
           
           {images.map((image,i)=>{
            
               return <li key={i}><img src={image.src}/></li>
           })}
        
           

        </ul>
        </div>
    );
};

export default Admin;