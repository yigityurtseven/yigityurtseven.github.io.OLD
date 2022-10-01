import React from 'react'
import { Card } from '..'
import { motion } from 'framer-motion'
import izonaySS from '../../img/izonaywebsitess.png'
import yurtsevenSS from '../../img/yurtsevenSS.png'
import './projects.css'

const Projects = () => {
    return (
        <motion.div className="projects-outer-container" id='projects'>
            <div className="projects-text">
                <h2>projects</h2>
            </div>
            <Card projectName='IzOnay' projectDescription='Designed and developed commercial website of product Izonay which belongs the the company izometri. Website is designed on Adobe XD and developed with HTML, CSS and React JS. Code is hidden but you can visit the website by clicking the button below. ' projectLink='https://izonay.com/' projectBackground={izonaySS} isCodeAvailable={false} />
            <Card projectName='Yurtseven Kuyumculuk' projectDescription='Designed and developed commercial information website of local jewelry store Yurtseven Kuyumculuk. Website is designed on Adobe XD and developed with pure HTML, CSS. Code will be available soon. But still you can visit the website from the button below. ' projectLink='http://yurtsevenkuyumcu.com/' projectBackground={yurtsevenSS} isCodeAvailable={true} />
        </motion.div>
    )
}

export default Projects