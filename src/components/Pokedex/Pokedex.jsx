import './Pokedex.css'
import React from 'react'

import PokeDex from '../../data/PokeDex'

import Pokedex03 from '../../img/pokedex-03.png'
import Triangle from '../../img/triangle.png'
import { useState } from 'react'

import PokemonInfo from './PokemonInfo/PokemonInfo'
import RemoveBGicon from '../RemoveBG/RemoveBGicon'

const Pokedex = (props) => {

    function setOff() {
        props.setOff(false)
        setInfoOn(false)
        setActualPokemon(0)
    }

    function closeInfo() {
        setInfoOn(false)
        setActualPokemon(0)
    }

    const [infoOn, setInfoOn] = useState(false)
    const [actualPokemon, setActualPokemon] = useState(0)

    function setInfo(index) {
        setActualPokemon(PokeDex[index])
        setInfoOn(!infoOn)
    }
    
    return (
        <div className={!props.off ? 'pokedex-container' : 'pokedex-container on'}>
            <img src={Pokedex03} />
            <img src={Pokedex03} />
            <button onClick={!infoOn ? setOff : closeInfo}><img src={Triangle} /></button>
            <div className="pokedex-wrap">
                <div className={infoOn ? "pokemon-wrap off" : "pokemon-wrap"}>
                    {PokeDex.map((item, index) => {
                        return (
                            <button key={index}
                            className='pokemon-button'
                            onClick={e => setInfo(index)}>
                                <div className="pokemon-icon">
                                    <div className="pokemon-icons-wrap">
                                        <RemoveBGicon id={item.id}/>
                                    </div>
                                    <p>{item.name}</p>
                                </div>
                                <p>#{item.id}</p>
                            </button>
                        )
                    })}
                </div>
                {
                    infoOn ? <PokemonInfo infoOn={infoOn} pokemon={actualPokemon} /> : ''
                }
            </div>
        </div>
    )
}

export default Pokedex