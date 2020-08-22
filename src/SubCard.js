import React from "react"
import "./sub-card.css"
import "./util.css"

const SubCard=()=>{
    return(
        <div className="main-container">
            <div className="image-container">
                <img src={require("./images/card.png")} alt="card"></img>

            </div>
            <div className="card-container">
                <div className="head-container">
                    <p className="s-titleB">METAL</p>
                    <h1 className="s-number" >2.15% </h1>
                    <div className="small-cont">
                        <div className="small-b">
                            <p>5%</p>
                        </div>
                        <p className="s-titleN">cash back</p>
                    </div>
                </div>
                <div className="gap-c">
                    <div className="container-c">
                        <div className="container-r">
                            <div className="container-r" >
                                <p className="green-t">2167</p>
                                <p className="grey-st">  /2500</p>
                                <p className="grey-sst">333 spots left</p>

                            </div>
                        </div>
                        <div className="container-c mb">
                                <div id="myProgress">
                                    <div id="myBar"></div>
                                </div>
                                <div className="btn-primary">
                                    <p>Signup Now </p>

                                </div>
                            </div>
                    </div>
                    <div className="container-c ">
                        <div className="container-r fjcs">
                            <p className="s-p lg1">INCLUDES</p>
                        </div>
                        <div className="container-c">
                        <div className="container-r mt2 fjcs">
                            <i class="fa fa-check mr2 green" aria-hidden="true"></i>
                            <p>Charcoal Black Metal Card</p>
                        </div>
                        <div className="container-r mt2 fjcs">
                            <i class="fa fa-check mr2 green" aria-hidden="true"></i>
                            <p>2.15%1 Bonus Rate Checking Account</p>
                        </div>
                        <div className="container-r mt2 fjcs">
                            <i class="fa fa-check mr2 green" aria-hidden="true"></i>
                            <p>5% Cash back on brands you love</p>
                        </div>
                        <div className="container-r mt2 fjcs">
                            <i class="fa fa-check mr2 green" aria-hidden="true"></i>
                            <p>5% Cash back on brands you love</p>
                        </div>
                        <div className="container-r mt2 fjcs">
                            <i class="fa fa-check mr2 green" aria-hidden="true"></i>
                            <p>2.15%1 Bonus Rate Checking Account</p>
                        </div>
                        </div>
                        
                    </div>
                    <div className="container-c">
                        <div className="container-r">
                            <p className="sp">Fund your account with a minimum opening deposit of $1000. 3 additional free ATM withdrawals per month from out of network ATMs.</p>


                        </div>
                        <div className="container-c green-back br-5 .mt-2">
                            <div className="container-r">
                            <i class="fa fa-usd " aria-hidden="true"></i>
                            <p>$11.99/m Membership Fee</p>
                            </div>
                            <p className="normal-heading">Free for 6 months</p>

                        </div>

                    </div>

                </div>


            </div>

        </div>

    )
}

export default SubCard