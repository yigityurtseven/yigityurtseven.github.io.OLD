import React from 'react'
import './about.css'
import me from '../../img/me.jpeg'
const About = () => {
    const images = [
        { src: 'html', desc: 'html5', star: 5 },
        { src: 'css', desc: 'css3', star: 5 },
        { src: 'js', desc: 'javascript', star: 3 },
        { src: 'vue', desc: 'vuejs', star: 3 },
        { src: 'react', desc: 'reactjs', star: 3 },
        { src: 'figma', desc: 'figma', star: 4 },
        { src: 'xd', desc: 'adobe xd', star: 4 },
        { src: 'ps', desc: 'adobe photoshop', star: 4 }
    ];
    return (
        <div className="about-outer-container" id='about'>
            <div className="about-container" >
                <div className='about-left-side'>
                    <div className='about-title'>
                        <h2>about</h2>
                    </div>
                    <div className="about-text">
                        <p>i am a junior software engineer and front-end developer based in istanbul. currently working at <a href="https://www.izometri.com.tr/" target="__blank">izometri</a>  where i design and code the front-end part of the projects. i make most of the designs on figma. currently working with vue.js</p>
                    </div>
                    <div className="about-text" >
                        <p>my expertise is front-end development, designing. i have 4 years of prior html, css experience and 1 year of javascript experience. </p>
                    </div>
                    <div className="about-text" style={{ marginBottom: "30px" }}>
                        <p>i play guitar sometimes and take photos. you can see the photos at my instagram page from <a href="https://www.instagram.com/__________yyada/" target='__blank'>here</a>.</p>
                    </div>
                    <div className='expertise'>
                        {images.map((item) => (
                            <div className="expertise-icons">
                                <img
                                    src={require('../../img/icons/' +
                                        item.src +
                                        '.svg')}
                                    alt={item.title}
                                />
                                <span className='expertise-desc'>
                                    {item.desc} | {item.star} / 5
                                </span>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-right-side">
                    <img src={me} alt="" />

                </div>
            </div>

        </div>
    )
}

export default About