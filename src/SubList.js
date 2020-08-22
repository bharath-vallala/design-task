import React from "react"
import "./util.css"
import "./sub-list.css"
import SubCard from "./SubCard"

const SubList=()=>{
    return(
        <div className="flexc-main">
            <div className="flexc-sec">
                <p className="heading-2">Sign up early to save more</p>
                <p className="s-pB">Depending on the level of your checking account, you’ll earn between 1.15%3 to 2.15%1 bonus rate.</p>
            </div>
            <div className="flexr">
                <SubCard></SubCard>
                <SubCard></SubCard>
                <SubCard></SubCard>

            </div>


        </div>
    )
}
export default SubList