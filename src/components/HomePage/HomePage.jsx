import './HomePage.css'
import React, { useState } from 'react'

import YellowTriangle from '../../img/triangle.png'

const HomePage = () => {

    const [opened, setOpened] = useState(false)

    function openDex() {
        setOpened(!opened)
    }

    const [off, setOff] = useState(false)

    function turnOff() {
        setOff(true)
        setOpened(false)
    }

    return (
        <div className={off ? 'pokedex-closed off' : 'pokedex-closed'}>
            <div className={!opened ? "pokedex-cover" : "pokedex-cover opened"}>
                <button onClick={openDex}>
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