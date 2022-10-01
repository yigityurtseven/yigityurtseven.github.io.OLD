import React from 'react'
import './about.css'
const About = () => {
    return (
        <div className="about-outer-container" id='about'>
            <div className="about-container" >
                <div className='about-title'>
                    <h2>about</h2>
                </div>
                <div className="about-text">
                    <p>i am a junior software engineer and front-end developer based in istanbul and originally from ordu. currently working at <a href="https://www.izometri.com.tr/" target="__blank">izometri</a>  where i help designing and coding process of the projects. i make most of the designs on figma. currently working with vue.js</p>
                </div>
                <div className="about-text" >
                    <p>my expertise is front-end development, designing and just a little bit mobile development (react native and swiftui). i have 4 years of prior html, css experience and 1 year of javascript experience (mostly react). </p>
                </div>
                <div className="about-text" style={{ marginBottom: "30px" }}>
                    <p>i play guitar sometimes and take photos. you can see the photos at my instagram page from <a href="https://www.instagram.com/__________yyada/" target='__blank'>here</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default About