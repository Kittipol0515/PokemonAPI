import React from "react";
import "../components/style.css"
import Card from "./Card";
import Pokeinfo from "./Pokeinfo"

const Main=()=> {
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>   
                <div className="right-content">
                    <Pokeinfo/>
                </div>
            </div>
            <div className="btn-group">
                        <button>Previous</button>
                        <button>Next</button>
                </div>
        </>
    )
}

export default Main