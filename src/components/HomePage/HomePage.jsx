import './HomePage.css'
import React, { useState } from 'react'

import YellowTriangle from '../../img/triangle.png'

const HomePage = (props) => {

    const [opened, setOpened] = useState(false)

    function openDex() {
        setOpened(!opened)
    }

    function turnOff() {
        props.setOff(true)
        setOpened(false)
    }

    function animationOff() {
        const dexButton = document.querySelector('.pokedex-cover > button')
        dexButton.style.animation = 'none'
    }

    return (
        <div className={props.off ? 'pokedex-closed off' : 'pokedex-closed'}>
            <div className={!opened ? "pokedex-cover" : "pokedex-cover opened"}>
                <button onClick={openDex} onMouseEnter={animationOff}>
                    <img src={YellowTriangle} alt="Open" />
                </button>
            </div>
            <div className="pokedex-content">
                <div className="pokedex-screen" onClick={turnOff}>

                </div>
            </div>
        </div>
    )
}

export default HomePage