import './Pokedex.css'
import React from 'react'

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
        </div>
    )
}

export default Pokedex