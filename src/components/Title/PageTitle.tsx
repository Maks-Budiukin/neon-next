import React from 'react'
import { TitleVariant } from './types';
import clsx from 'clsx';

interface TitleProps {
    variant?: TitleVariant;
    children: React.ReactNode;
    className?: string
}

const PageTitle: React.FC<TitleProps> = ({ variant = 'yellow', children, className }) => {

    const baseClasses = 'text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl';

    const glowStyle = (variant: TitleVariant) => {
        switch (variant) {
            case 'yellow':
                return '0 0 5px #ffb900, 0 0 10px #ffb900, 0 0 20px #ffb900'

            case 'blue':
                return '0 0 5px #006AE3, 0 0 10px #006AE3, 0 0 20px #006AE3'

            case 'purple':
                return '0 0 5px #5d0ec0, 0 0 10px #5d0ec0, 0 0 30px #5d0ec0'
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
        <h1 className={clsx(baseClasses, textStyle(variant), className)} style={{
            textShadow: glowStyle(variant)
        }}>{children}</h1>
    )
}

export default PageTitle