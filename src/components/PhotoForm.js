import React, { useEffect, useState } from 'react';


const PhotoForm = () => {

    const [image,setImage] = useState({name:"",src:"",information:"",date:new Date()});
    
    useEffect(()=>{
        
    
        if(sessionStorage.getItem("id")!==null)
        {
            const id = sessionStorage.getItem("id");
            const image = JSON.parse(localStorage.getItem("images"))[id];
         
            setImage({...image,date:new Date()});
        }
        
    },[])

    const handleSubmit=(e)=>{

        e.preventDefault();
       
        const images = JSON.parse(localStorage.getItem("images"));
        if(sessionStorage.getItem("id")!==null){
          
            const id = sessionStorage.getItem("id");
          
            images[id] = image;
        
            
        }
        else{
            images.push(image);
            console.log("not");
        }
        
        localStorage.setItem("images",JSON.stringify(images));

        

    }

    return (
      
        <div className="container">
        <h2 style={{textAlign:"center"}}>Image Form</h2>
        <br/>
        <br/>
    <form id="photoForm">
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" className="form-control mb-4 col-4"
             onChange={(e)=>{setImage({...image,name:e.target.value})}}
             value={image.name}/>
        </div>
        <div className="form-group">
            <label htmlFor="src">Src</label>
            <input type="url" name="src" className="form-control mb-4 col-4"
             onChange={(e)=>{setImage({...image,src:e.target.value})}}
             value={image.src}/>
        </div>
        <div className="form-group">
            <label htmlFor="information">Information</label>
            <input type="text" name="information" className="form-control mb-4 col-4" 
             onChange={(e)=>{setImage({...image,information:e.target.value})}}
             value={image.information}/>
        </div>
        <input type="submit" className="btn btn-default" onClick={handleSubmit} value="Submit"/>
        <br/>
    </form>
    <br/>
    <br/>

    <a href="/admin" className="link">Back to Admin</a>
</div>

    );
};

export default PhotoForm;