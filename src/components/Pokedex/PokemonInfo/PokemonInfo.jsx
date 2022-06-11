import './PokemonInfo.css'
import React, { useState } from 'react'

import Triangle from '../../../img/triangle.png'

const PokemonInfo = (props) => {

    function closeInfo() {
        props.closeInfo()
    }
    
    const [gender, setGender] = useState('M')

    function setMale() {
        setGender('M')
    }

    function setFemale() {
        setGender('F')
    }
    
    return (
        <div className={props.infoOn ? 'pokemon-info-conteiner on' : 'pokemon-info-conteiner'}>
            <button className='close-info' onClick={closeInfo}><img src={Triangle} /></button>
            {
                props.pokemon.gender == 'MF' ?
                    gender == 'M' ? 
                    <div className='pokemon-info-wrap male'>
                        <img src={require(`../../../img/pics/${props.pokemon.id}m.png`)} />
                        <div className="gender-buttons">
                            <button onClick={setMale}>male</button>
                            <button onClick={setFemale}>female</button>
                        </div>
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                    </div> : 
                    <div className='pokemon-info-wrap female'>
                        <img src={require(`../../../img/pics/${props.pokemon.id}f.png`)} />
                        <div className="gender-buttons">
                            <button onClick={setMale}>male</button>
                            <button onClick={setFemale}>female</button>
                        </div>
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                    </div> : ''
            }
            {
                props.pokemon.gender == 'M' ? 
                    <div className='pokemon-info-wrap male'>
                        <img src={require(`../../../img/pics/${props.pokemon.id}m.png`)} />
                        <button onClick={setMale}>male</button>
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                    </div> : ''
            }
            {
                props.pokemon.gender == 'F' ? 
                    <div className='pokemon-info-wrap female'>
                        <img src={require(`../../../img/pics/${props.pokemon.id}f.png`)} />
                        <button onClick={setFemale}>female</button>
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                    </div> : ''
            }
            {
                props.pokemon.gender == undefined ?
                    <div className='pokemon-info-wrap unknown'>
                        <img src={require(`../../../img/pics/${props.pokemon.id}.png`)} />
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                    </div> : ''
            }
        </div>
    )
}

export default PokemonInfo