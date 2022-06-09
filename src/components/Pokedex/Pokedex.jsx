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
                            <button key={index}
                            className='pokemon-button'>
                                <div className="pokemon-icon">
                                    <div className="pokemon-icons-wrap">
                                        <img src={require(`../../img/icons/${item.id}-1.png`)} />
                                        <img src={require(`../../img/icons/${item.id}-2.png`)} />
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                                <p>#{item.id}</p>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Pokedex