
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Styles.css';

const LiquidButton = ({
    children,
    onClick,
    className = '',
    variant = 'dark',
    type = 'button'
}) => {
    const btnRef = useRef(null);
    const flairRef = useRef(null);

    useGSAP(() => {
        const btn = btnRef.current;
        const flair = flairRef.current;
        if (!btn || !flair) return;

        const xSet = gsap.quickSetter(flair, 'xPercent');
        const ySet = gsap.quickSetter(flair, 'yPercent');

        const getXY = (e) => {
            const { left, top, width, height } = btn.getBoundingClientRect();
            const xTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, width, 0, 100),
                gsap.utils.clamp(0, 100)
            );
            const yTransformer = gsap.utils.pipe(
                gsap.utils.mapRange(0, height, 0, 100),
                gsap.utils.clamp(0, 100)
            );
            return {
                x: xTransformer(e.clientX - left),
                y: yTransformer(e.clientY - top)
            };
        };

        const handleMouseEnter = (e) => {
            const { x, y } = getXY(e);
            xSet(x);
            ySet(y);
            gsap.to(flair, {
                scale: 1,
                duration: 0.5,
                ease: 'expo.out'
            });
        };

        const handleMouseLeave = (e) => {
            const { x, y } = getXY(e);
            gsap.to(flair, {
                xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
                yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
                scale: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
        };

        const handleMouseMove = (e) => {
            const { x, y } = getXY(e);
            gsap.to(flair, {
                xPercent: x,
                yPercent: y,
                duration: 0.5,
                ease: 'power2'
            });
        };

        btn.addEventListener('mouseenter', handleMouseEnter);
        btn.addEventListener('mouseleave', handleMouseLeave);
        btn.addEventListener('mousemove', handleMouseMove);

        return () => {
            btn.removeEventListener('mouseenter', handleMouseEnter);
            btn.removeEventListener('mouseleave', handleMouseLeave);
            btn.removeEventListener('mousemove', handleMouseMove);
        };
    }, { scope: btnRef });

    return (
        <>
            <button
                ref={btnRef}
                type={type}
                onClick={onClick}
                className={`liquid-button liquid-button--${variant} ${className}`}
            >
                <span ref={flairRef} className="button__flair"></span>
                <span className="button__label">{children}</span>
            </button>

            {/* Shared Filter Definition (Only rendered once per app ideally, but here for portability) */}
            <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0">
                <defs>
                    <filter id="liquid-goo-filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </>
    );
};

LiquidButton.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    variant: PropTypes.oneOf(['dark', 'accent', 'light', 'stroke']),
    type: PropTypes.oneOf(['button', 'submit'])
};

export default LiquidButton;
