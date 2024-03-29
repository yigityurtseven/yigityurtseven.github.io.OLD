import React from 'react'
import { Card } from '..'
import { motion } from 'framer-motion'
import izonaySS from '../../img/izonaywebsitess.png'
import yurtsevenSS from '../../img/yurtsevenSS.png'
import './projects.css'

const Projects = () => {
    return (
        <motion.div className="projects-outer-container" id='projects' initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.4,
                ease: [0, 0.71, 0.5, 1.1],
            }}>
            <motion.div className="projects-text" initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    delay: 0.4,
                    ease: [0, 0.71, 0.5, 1.1],
                }}>
                <h2>projects</h2>
            </motion.div>
            <motion.div className="projects-mobile-container">
                <motion.div className="mobile-card" initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.4,
                        ease: [0, 0.71, 0.5, 1.1],
                    }}>
                    <h3>IzOnay</h3>
                    <p className='mobile-card-p'>Designed and developed commercial website of product Izonay which belongs the the company izometri. Website is designed on Adobe XD and developed with HTML, CSS and React JS. Code is hidden but you can visit the website by clicking the button below.</p>
                    <a href='https://izonay.com/' target='__blank'><button>Visit</button></a>
                    <img src={izonaySS} alt="xd" />
                </motion.div>
                <motion.div className="mobile-card" initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 0.4,
                        ease: [0, 0.71, 0.5, 1.1],
                    }}>
                    <h3>Yurtseven Kuyumculuk</h3>
                    <p className='mobile-card-p'>Designed and developed commercial information website of local jewelry store Yurtseven Kuyumculuk. Website is designed on Adobe XD and developed with pure HTML, CSS. Code will be available soon. But still you can visit the website from the button below.</p>
                    <a href='http://yurtsevenkuyumcu.com/' target='__blank'><button>Visit</button></a>
                    <img src={yurtsevenSS} alt="xd" />
                </motion.div>
            </motion.div>
            <Card projectName='IzOnay' projectDescription='Designed and developed commercial website of product Izonay which belongs the the company izometri. Website is designed on Adobe XD and developed with HTML, CSS and React JS. Code is hidden but you can visit the website by clicking the button below. ' projectLink='https://izonay.com/' projectBackground={izonaySS} isCodeAvailable={false} />
            <Card projectName='Yurtseven Kuyumculuk' projectDescription='Designed and developed commercial information website of local jewelry store Yurtseven Kuyumculuk. Website is designed on Adobe XD and developed with pure HTML, CSS. Code will be available soon. But still you can visit the website from the button below. ' projectLink='http://yurtsevenkuyumcu.com/' projectBackground={yurtsevenSS} isCodeAvailable={true} />
        </motion.div>
    )
}

export default Projects