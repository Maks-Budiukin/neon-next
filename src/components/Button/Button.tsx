import React from 'react'
import clsx from 'clsx';

type ButtonVariants = 'yellow' | 'yellow-secondary' | 'blue' | 'blue-secondary' | 'purple' | 'purple-secondary'

interface ButtonProps {
    label: string;
    variant?: ButtonVariants
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'yellow' }) => {

    const baseClasses = 'px-4 py-2 rounded-xl border  duration-200 cursor-pointer min-w-48';

    const variantClasses = (variant: ButtonVariants) => {
        switch (variant) {
            case "yellow":
                return 'border-amber-400 hover:border-amber-500 text-amber-400 hover:text-amber-500'

            case "yellow-secondary":
                return 'border-amber-400 hover:border-amber-500 text-white bg-amber-400 hover:bg-amber-500'

            case "blue":
                return 'border-sky-400 hover:border-sky-500 text-sky-400 hover:text-white hover:bg-sky-500'

            case "blue-secondary":
                return 'border-sky-400 hover:border-sky-500 text-white bg-sky-400 hover:bg-sky-500'

            case "purple":
                return 'border-violet-400 hover:border-violet-500 text-violet-400 hover:text-violet-500'

            case "purple-secondary":
                return 'border-violet-400 hover:border-violet-500 text-white bg-violet-400 hover:bg-violet-500'
        }
    }

    return (
        <button type='button' className={clsx(baseClasses, variantClasses(variant))}>{label}</button>
    )
}

export default Button