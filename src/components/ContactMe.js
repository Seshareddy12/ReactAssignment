import React from 'react';



const ContactMe = props => {
    return (
        <div className="container">
        <br/>
    <h2 style={{textAlign:"center"}}>Contact Me</h2>
    <br/>
    <h4>Enter Details</h4>
    <br/>
    <form id="contactForm">
        <div className="form-group">
        <label for="firstname">
            FirstName 
        <input type="text"  name="firstname" placeholder="Enter First Name" id="firstname" className="form-control mb-4 col-4" required/>
       
        </label>
        </div>
       
        <br/>
        <div className="form-group">
        <label for="lastname">
            LastName 
            <input type="text" name="lastname" placeholder="Enter Last Name" className="form-control mb-4 col-4" id="lastname" required/>
          
            </label>
        </div>
        <br/>
        <div className="form-group">
        <label for="email">
            Email 
            <input type="email" name="email" placeholder="Enter Email" className="form-control mb-4 col-4" id="email" required/>
         </label>
        
        </div>
        <br/>
        <div className="form-group">
        <label for="number">
            Mobile Number 
            <input type="text" name="number" id="number" placeholder="Enter Mobileno" className="form-control mb-4 col-4" pattern="([7-9][0-9]{9})$" required/>
          </label>
        
        </div>
        
        <br/>
        <input type="submit" onClick={(e)=>{alert("Details Submitted")}} className="btn btn-default" value="Submit"/>
        <br/>
        <br/>
   
    </form>
    
    
    </div>
    
    );
};



export default ContactMe;