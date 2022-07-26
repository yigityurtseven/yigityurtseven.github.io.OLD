import React from "react";
import "./cardcomponent.css";
import { motion } from "framer-motion";
import { useState } from "react";

const CardComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card-container">
            <motion.div
                transition={{ layout: { duration: 1, type: "spring" } }}
                layout
                onClick={() => setIsOpen(!isOpen)}
                className="card"
                style={{
                    borderRadius: "1rem",
                    boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)',
                }}
            >
                <motion.h2 layout="position">Scuderia Ferrari 🏎</motion.h2>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="expand">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                            molestias ex expedita culpa modi neque reiciendis corporis
                            corrupti eius illo.
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
                            incidunt.
                        </p>
                        <button>here</button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default CardComponent;
