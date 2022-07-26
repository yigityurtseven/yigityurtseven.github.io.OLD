import React from 'react'
import './header.css'
import AnimatedText from '../AnimatedText'
import { motion } from "framer-motion";

const Header = () => {
    const placeholderText = [
        { type: "heading1", text: " YIGIT" },
        {
            type: "heading2",
            text: " YURTSEVEN"
        }
    ];
    const specText = [
        { type: 'paragraph', text: "software engineer" },
        { type: 'paragraph', text: "frontend developer" },
        { type: 'paragraph', text: "minimalist" }
    ]
    const bottomText = [
        { type: 'paragraph', text: "currently at Istanbul" }
    ]
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            }
        }
    };
    return (
        <motion.div className="header-outer-container"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                delay: 0.4,
                ease: [0, 0.71, 0.5, 1.1],
            }}>

            <motion.div
                className="header-container"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <div className='tempdiv'></div>
                <div className="container">
                    {placeholderText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                    })}
                </div>
                <div className="container">
                    {specText.map((item, index) => {
                        return <AnimatedText {...item} key={index} />;
                    })}
                </div>
                <motion.div className='header-bottom-texts'>
                    <div className="header-bottom-text-left">
                        {bottomText.map((item, index) => {
                            return <AnimatedText {...item} key={index} />;
                        })}
                    </div>
                    <div className="header-bottom-text-right">

                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Header