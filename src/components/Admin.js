import React, { useEffect ,useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import PhotoForm from './PhotoForm';


const Admin = () => {

const[images,setImages] = useState([]);

    
useEffect(()=>{
    const images = JSON.parse(localStorage.getItem("images"))
    setImages(images)
},[])
useEffect(()=>{
    localStorage.setItem("images",JSON.stringify(images))
},[images])

   
    return (
        <div className="container">
        <h2 style={{textAlign:"center"}}>Admin Page</h2>
        <br/>
        <Link to="/photoForm" className="btn btn-primary" id="addImg" onClick={e=>{sessionStorage.clear()}}>Add Image</Link>
        <br/>
        <br/>
        <table className="table table-bordered table-striped">
            <thead>
            <tr>
                <th>Name</th>
                <th>Source</th>
                <th>Information</th>
                <th>Date Created/Modified</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {images.map((image,i)=>{
                return (
                    <tr key={i}>
                        <td>{image.name}</td>
                        <td>{image.src}</td>
                        <td>{image.information}</td>
                        <td>{image.date}</td>
                        <td><Link to={{pathname:`/photoForm`}} className="text text-success" onClick={(e)=>{
                            sessionStorage.setItem("id",i);
                        }}>Update</Link> | <Link to="#"  onClick={(e)=>{images.splice(i,1);
                        setImages([...images])}} 
                        className="text text-danger">Delete</Link></td>
                        
                    </tr>
                )
            })}
            </tbody>

        </table>    
    
    </div>
    );
};

export default Admin;