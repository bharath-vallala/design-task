import React from "react";
import "./util.css"
import "./company-show.css"
const CompanyShow=()=>{
    return(
        <div className="center">
            <div className="main-container">
                    <h1 className="m-heading1">BACKED BY THE BEST</h1>
                    <div className="hor-flex mv-flex" > 
                        <figure className="fig">
                        <img src={require("./images/comp1.png")} alt="comp1"></img>
                        </figure>
                        <figure className="fig">
                            <img src={require("./images/comp2.png")} alt="comp2"></img>
                        </figure >
                        <figure className="fig">
                            <img  src={require("./images/comp3.png")} alt="comp3"></img>
                        </figure>
                    </div>
            </div>
            <div className="center" >
                <div className="flex-row mv-flex">
                     
                     <div className="flex-col width-50  justify-start">
                         <p className="primary-heading">Start saving for a rainy day fund</p>
                         <p className="heading-2">Use Our Checking Account to Achieve Your Financial Goals</p>
                         <div>
                             <p className="s-p">
                             With the latest Federal rate cut, the largest banks are offering close to 0% APY on their checking and savings accounts. OnJuno checking will earn you more than 20x the national average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your idle money faster with our checking account and start saving towards a rainy day fund, big expense, or vacation.
                             </p>
                         </div>
                     </div>
                     <div  className="image-container">
                         <img src={require("./images/percentage.svg")}></img>

                     </div>

                </div>

            </div>
        </div>
    )
}
export default CompanyShow;