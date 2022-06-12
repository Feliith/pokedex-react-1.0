import React, { useState } from 'react'

const RemoveBG = (props) => {
    
    const src01 = require(`../../img/icons/${props.id}-1.png`)
    const src02 = require(`../../img/icons/${props.id}-2.png`)

    const [source, setSource] = useState(src01)

    if (source == src01) {
        setTimeout(() => {
            setSource(src02)
        }, 800)
    } else {
        setTimeout(() => {
            setSource(src01)
        }, 800)
    }

    function bg() {
        const canvas = document.querySelector(`.canvas-${props.id}-icon`)

        const image = new Image()
        image.src = source
        image.onload = drawImage

        function drawImage() {
            const ctx = canvas.getContext('2d')
            ctx.drawImage(image, 0, 0)
            processImage(ctx)
        }

        function processImage(context) {
            const imageData = context.getImageData(0, 0, 32, 32)
            const data = imageData.data

            for (let i = 0 ; i < data.length ; i +=4) {
                const r = data[i]
                const g = data[i + 1]
                const b = data[i + 2]

                if (r == data[0] && g == data[1] && b == data[2]) {
                    data[i + 3] = 0
                }
            }
            context.putImageData(imageData, 0, 0)
        }
    }

    setTimeout(() => {
        bg()
    }, 100)

    return (
        <canvas className={`canvas-${props.id}-icon`} width='32px' height='32px'>

        </canvas>
    )
}

export default RemoveBG