import './Pokedex.css'
import React from 'react'

import PokeDex from '../../data/PokeDex'

import Pokedex03 from '../../img/pokedex-03.png'
import Triangle from '../../img/triangle.png'

const Pokedex = (props) => {

    function setOff() {
        props.setOff(false)
    }

    function bg() {
        const canvas01 = document.querySelectorAll('.canvas-01')
        const canvas02 = document.querySelectorAll('.canvas-02')

        PokeDex.map((item, index) => {
            const image = new Image()
            image.src = require(`../../img/icons/${item.id}-1.png`)
            image.onload = drawImage

            function drawImage() {
                const ctx = canvas01[index].getContext('2d')
                ctx.drawImage(image, 0, 0)
                processImage(ctx)
            }
        })

        PokeDex.map((item, index) => {
            const image = new Image()
            image.src = require(`../../img/icons/${item.id}-2.png`)
            image.onload = drawImage

            function drawImage() {
                const ctx = canvas02[index].getContext('2d')
                ctx.drawImage(image, 0, 0)
                processImage(ctx)
            }
        })

        function processImage(context) {
            const imageData = context.getImageData(0, 0, 32, 32)
            const data = imageData.data
            
            for (let i = 0 ; i < data.length ; i +=4) {
                const r = data[i]
                const g = data[i + 1]
                const b = data[i + 2]

                if (r == 98 && g == 156 && b == 131) {
                    data[i + 3] = 0
                }
            }
            context.putImageData(imageData, 0, 0)
        }
    }

    window.onload = bg
    
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
                                        <canvas className='canvas-01'
                                            width='32px'
                                            height='32px'
                                        />
                                        <canvas className='canvas-02 off'
                                            width='32px'
                                            height='32px'
                                        />
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