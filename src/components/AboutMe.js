import React from 'react';

function AboutMe(props) {
    return (
        <div class="container">
        <br/>
        <h2 style={{textAlign: "center"}}>About Me</h2>
        <br/>
        <h4>Introduction</h4>
        <p> I am K SeshaReddy,working at Zemoso technologies as an intern.
            I completed B.tech from G Pullaiah College of Engineering and technology in the stream of computer science and engineering.</p>
        <hr/>
        <br/>
            <h4> Skills</h4>
        <ul>
            <li>C </li>
            <li>Java </li>
            <li>Python </li>
        </ul>
        <hr/>
        <h4>Hobbies</h4>
        <ul style={{listStyleType: "none"}}>
            <li>Watching Web Series  </li>
            <li>Reading news paper  </li>
            <li>Playing Games   </li>
        </ul>
        <br/>
        <h4 style={{display: "inline"}}>External Links :</h4>
        <a href="https://github.com/Seshareddy12">  <i class="fa fa-github fa-lg" aria-hidden="true"></i>  </a> |
        <a href="https://www.linkedin.com/in/kamaganiguntla-seshareddy-852709129/">        <i class="fa fa-linkedin fa-lg" aria-hidden="true"/></a>
        <br/>
        <br/>
        </div>
    );
}

export default AboutMe;