import React from "react"
import "./util.css"
import "./show-case.css"

const Showcase=()=>{
    return(
       
            <div className="center-flex">
                <div className="flex-2">
                    <div className="showcase-content">
                        <h1>
                        The Most Powerful Checking Account
                        </h1>
                        <h2>
                        Our checking account gives you higher returns
                        than a savings account with no hidden fees.
                        </h2>
                        <div className="email-container">
                            <i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
                            <input type="email" placeholder="Enter Email Address"></input>
                            <div className="btn-primary"><p>Join now</p></div>
                        </div>
                        <div className=" mt2 flex-row">
                            <img src="https://www.countryflags.io/us/flat/32.png" alt="flag"></img>
                            <p>335 spots left for Priority Access</p>
                        </div>
                        <div className="mt3 h3 flex-row ">
                            <img src={require("./images/ap.png")} alt="image1"></img>
                            <img src={require("./images/gp.png")} alt="image3"></img>

                        </div>

                    </div>
                    <div className="showcase-img">
                        <img src={require("./images/showcase phone.png")} alt="image4"></img>
                    </div>
                    
                </div>
            </div>
            
        
    )

}
export default Showcase