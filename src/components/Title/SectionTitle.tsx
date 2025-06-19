import React from 'react'
import { TitleSize, TitleVariant } from './types';
import clsx from 'clsx';

interface TitleProps {
    variant?: TitleVariant;
    size?: TitleSize;
    children: React.ReactNode;
    className?: string
}

const SectionTitle: React.FC<TitleProps> = ({ variant = 'yellow', children, size = 'base', className }) => {

    const baseClasses = '';

    const sizeStyle = (variant: TitleSize) => {
        switch (variant) {
            case 'sm':
                return 'text-2xl lg:text-3xl xl:text-4xl'

            case 'md':
                return 'text-3xl lg:text-4xl xl:text-5xl'

            case 'base':
                return 'text-5xl lg:text-6xl xl:text-7xl'

            case 'lg':
                return 'text-6xl lg:text-7xl xl:text-8xl'

            case 'xl':
                return 'text-7xl lg:text-8xl xl:text-9xl'
        }

    }

    const glowStyle = (variant: TitleVariant) => {
        switch (variant) {
            case 'yellow':
                return '0 0 5px #ffb900, 0 0 10px #ffb900, 0 0 20px #ffb900'

            case 'blue':
                return '0 0 15px #006AE3, 0 0 10px #006AE3, 0 0 40px #006AE3'

            case 'purple':
                return '0 0 40px #5d0ec0, 0 0 20px #5d0ec0, 0 0 60px #5d0ec0'
        }
    }

    const textStyle = (variant: TitleVariant) => {
        switch (variant) {
            case 'yellow':
                return 'text-amber-200'

            case 'blue':
                return 'text-[#10e0fc]'

            case 'purple':
                return 'text-cyan-200'
        }
    }

    return (
        <h1 className={clsx(baseClasses, textStyle(variant), sizeStyle(size), className)} style={{
            textShadow: glowStyle(variant)
        }}>{children}</h1>
    )
}

export default SectionTitle