import React, { useState } from 'react';
import "./util.css"
import "./nav-bar.css"




const NavBar=()=>{

    const [isactive, setisactive] = useState("active");
    const active=()=>{
        console.log("clicked")
        if(isactive==="active"){
           setisactive("active active1")
            console.log(isactive)
        }else if(isactive==="active active1"){
            setisactive("active")
            console.log(isactive)

        }
    }

    return(
        <div className="nav-container">

                <img className="logo" src={require("./images/logo.png")} alt="logo"></img>
            <div className={isactive}>

            
                <div className="nav-box jus-start ">
                    <ul className="hor-list ">
                        <li className="hor-list-item"><a href="#"><p>Home</p></a></li>
                        <li className="hor-list-item"><a href="#"><p>Company</p></a></li>
                        <li className="hor-list-item"><a href="#"><p>Learn</p></a></li>
                        <li className="hor-list-item"><a href="#"><p>Leagal</p></a></li>
                    </ul>
                </div>
                <div className="nav-box just-end buttons-cont">
                    <div className="btn-secondary"><p>Login</p></div>
                    <div className="btn-primary"><p>SignUp</p></div>
                </div>
            </div>
            
            <a href="#" className="tottle-button" onClick={active}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>

        </div>
    )
}

export default NavBar;