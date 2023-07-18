'use client'
import{useEffect, useRef} from 'react';
import Typed from 'typed.js';

const TypingAnimation = () => {
    const typingRef = useRef(null);

    useEffect(() => {
        if (typingRef.current) {
            const options = {
                strings: [' Web Developer', ' Freelancer'],
                typeSpeed: 40,
                backSpeed: 20,
                loop:true
            };
            const typed = new Typed(typingRef.current, options);

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return <div ref={(typingRef)} />;
};

export default TypingAnimation;