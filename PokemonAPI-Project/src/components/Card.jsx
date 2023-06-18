import React from "react";
import "../components/style.css"

const Card=() => {
    return(
        <>
            <div className="card">
                <div className="card-info">
                    <h3>No:1</h3>
                    <div className="card-img">
                        <img src="./charmander.png"/>
                    </div>
                    <h3>Charmander</h3>
                </div>
            </div>
        </>
    )
}

export default Card