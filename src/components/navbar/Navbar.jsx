import React from "react";
import "./navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    delay: 0.6,
                    ease: [0, 0.71, 0.5, 1.1],
                }}
                className="nav-items"
            >
                <a href="">home</a>
                <a href="">projects</a>
                <a href="">about</a>
                <a href="">dump</a>
            </motion.div>
        </div>
    );
};

export default Navbar;
