import React from 'react'
import { DesignCards } from '..'
import './designs.css'
import test from '../../img/yurtsevenSS.png'
const Designs = () => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nobis tempora consequatur a? Nostrum mollitia laudantium a eius, dolor vero."
    return (
        <div className='designs-outer-container' id="designs">
            <div className='designs-title'>
                <h2>designs</h2>
            </div>
            <DesignCards designName="test" designDescription={text} designPhoto={test} />
        </div>
    )
}

export default Designs