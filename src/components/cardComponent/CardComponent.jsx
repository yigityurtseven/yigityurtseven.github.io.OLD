import React from "react";
import "./cardcomponent.css";
import { motion } from "framer-motion";
import { useState } from "react";

const CardComponent = ({ projectName = "", projectDescription = "", projectLink = "", projectBackground = "", isCodeAvailable = Boolean }) => {
    const [isOpen, setIsOpen] = useState(false);

    function print() {
        console.log('printed');
    }

    return (
        <div className="card-container">

            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="card"
                style={{
                    height: isOpen ? "50vh" : "40vh",
                    width: isOpen ? "60vw" : "40vw",
                    borderRadius: "1rem",
                    boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)',
                    backgroundImage: `url(${projectBackground})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                }}
            >
                <motion.h2 layout="position" style={{
                    textAlign: isOpen ? "" : 'center',
                    lineHeight: isOpen ? '' : '20vh',
                }}>{projectName}</motion.h2>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, scale: 1 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="expand">
                        <p>{projectDescription}</p>
                        <a href={projectLink} target='__blank'><button onClick={print}>  Visit</button>  </a>
                        {/* {isCodeAvailable && <a href={projectLink} target='__blank'><button onClick={print}>  Visit</button>  </a>} */}
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default CardComponent;
