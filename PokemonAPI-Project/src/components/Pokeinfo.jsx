import React from "react";
import "../components/style.css"

const Pokeinfo=() => {
    return(
        <>
            <div className="pokeinfo">
             <h1>Charmander</h1>
             <div className="pokeinfo-img">
             <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg" alt=""/>
             </div>
             <div className="ability">
                <div className="group">
                    <h2>Blaze</h2>
                </div>
                <div className="group">
                    <h2>Solar-power</h2>
                </div>
            </div>
            <div className="base-stat">
                <h3>Hp:30</h3>
                <h3>Attack:52</h3>
                <h3>Defense:43</h3>
                <h3>Special-attack:50</h3>
                <h3>Speed</h3>
            </div>
            </div>
        </>
    )
}

export default Pokeinfo