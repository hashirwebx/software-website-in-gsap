import React from 'react';
import { motion } from 'framer-motion';

export const JumpingText = ({
    text,
    className = "",
    hoverColor = "hover:text-blue-500",
    yOffset = -20
}) => {
    const letters = text.split("");
    return (
        <div className={`flex flex-wrap ${className}`}>
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    className={`inline-block cursor-pointer transition-colors duration-300 ${hoverColor} ${letter === " " ? "mr-4" : ""}`}
                    whileHover={{ y: yOffset }}
                    // transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    transition={{ stiffness: 300, damping: 10 }}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </div>
    );
};


