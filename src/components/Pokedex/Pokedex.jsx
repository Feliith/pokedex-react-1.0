import './Pokedex.css'
import React from 'react'

import PokeDex from '../../data/PokeDex'

import Pokedex03 from '../../img/pokedex-03.png'
import Triangle from '../../img/triangle.png'

const Pokedex = (props) => {

    function setOff() {
        props.setOff(false)
    }

    return (
        <div className={!props.off ? 'pokedex-container' : 'pokedex-container on'}>
            <img src={Pokedex03} />
            <img src={Pokedex03} />
            <button onClick={setOff}><img src={Triangle} /></button>
            <div className="pokedex-wrap">
                <div className="pokemon-wrap">
                    {PokeDex.map((item, index) => {
                        return (
                            <button>{item.name}</button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pokedex