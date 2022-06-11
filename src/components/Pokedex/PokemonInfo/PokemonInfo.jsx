import './PokemonInfo.css'
import React, { useState } from 'react'

import PokeDex from '../../../data/PokeDex'
import Types from '../../../data/Types'
import RemoveBG from '../../RemoveBG/RemoveBG'
import RemoveBGEV from '../../RemoveBG/RemoveBGEV'

const PokemonInfo = (props) => {

    const [gender, setGender] = useState('M')

    function setMale() {
        setGender('M')
    }

    function setFemale() {
        setGender('F')
    }
    
    return (
        <div className={props.infoOn ? 'pokemon-info-conteiner on' : 'pokemon-info-conteiner'}>
            {
                props.pokemon.gender == 'MF' ?
                    gender == 'M' ? 
                    <div className='pokemon-info-wrap male'>
                        <RemoveBG id={props.pokemon.id} gender={'m'} />
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                        <div className="gender-buttons">
                            <button onClick={setMale} className={gender == 'M' ? 'gender-button m checked' : 'gender-button m'} />
                            <button onClick={setFemale} className={gender == 'F' ? 'gender-button f checked' : 'gender-button f'} />
                        </div>
                        <p className='pokemon-data'>{props.pokemon.data.M}</p>
                    </div> : 
                    <div className='pokemon-info-wrap female'>
                        <RemoveBG id={props.pokemon.id} gender={'f'} />
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                        <div className="gender-buttons">
                            <button onClick={setMale} className={gender == 'M' ? 'gender-button m checked' : 'gender-button m'} />
                            <button onClick={setFemale} className={gender == 'F' ? 'gender-button f checked' : 'gender-button f'} />
                        </div>
                        <p className='pokemon-data'>{props.pokemon.data.F}</p>
                    </div> : ''
            }
            {
                props.pokemon.gender == 'M' ? 
                    <div className='pokemon-info-wrap male'>
                        <RemoveBG id={props.pokemon.id} gender={'m'} />
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                        <button onClick={setMale} className='gender-button m checked' />
                        <p className='pokemon-data'>{props.pokemon.data.M}</p>
                    </div> : ''
            }
            {
                props.pokemon.gender == 'F' ? 
                    <div className='pokemon-info-wrap female'>
                        <RemoveBG id={props.pokemon.id} gender={'f'} />
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                        <button onClick={setFemale} className='gender-button f checked' />
                        <p className='pokemon-data'>{props.pokemon.data.F}</p>
                    </div> : ''
            }
            {
                props.pokemon.gender == undefined ?
                    <div className='pokemon-info-wrap unknown'>
                        <RemoveBG id={props.pokemon.id} gender={''} />
                        <div className="pokemon-name">
                            <p>#{props.pokemon.id}</p>
                            <p>{props.pokemon.name}</p>
                        </div>
                        <p className='pokemon-data'>{props.pokemon.data}</p>
                    </div> : ''
            }
            <div className="pokemon-type">
                {
                    props.pokemon.type.map((item, index) => {
                        return (
                            <span key={index} style={{background: Types[item].color, boxShadow: `2px 2px 0px ${Types[item].colorShadow}`}}>
                                {Types[item].title}
                            </span>
                        )
                    })
                }
            </div>
            <div className="pokemon-evolutions">
                {
                    props.pokemon.evolutions ?
                        props.pokemon.evolutions.map((item, index) => {
                            return (
                                <div key={index} className='pokemon-evolution-icon'>
                                    {
                                        PokeDex[item].gender == 'MF' ?
                                            <RemoveBGEV id={PokeDex[item].id} gender={'m'} evolution={true} /> : ''
                                    }
                                    {
                                        PokeDex[item].gender == 'M' ?
                                            <RemoveBGEV id={PokeDex[item].id} gender={'m'} evolution={true} /> : ''
                                    }
                                    {
                                        PokeDex[item].gender == 'F' ?
                                            <RemoveBGEV id={PokeDex[item].id} gender={'f'} evolution={true} /> : ''
                                    }
                                    {
                                        PokeDex[item].gender == undefined ?
                                            <RemoveBGEV id={PokeDex[item].id} gender={''} evolution={true} /> : ''
                                    }
                                    <p>#{PokeDex[item].id}</p>
                                    <p>{PokeDex[item].name}</p>
                                </div>
                            )
                        }) : ''
                }
            </div>
        </div>
    )
}

export default PokemonInfo