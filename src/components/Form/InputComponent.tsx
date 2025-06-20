import React from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import type { HTMLInputTypeAttribute } from 'react'

type StrictInputType =
  | 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local'
  | 'email' | 'file' | 'hidden' | 'image' | 'month'
  | 'number' | 'password' | 'radio' | 'range' | 'reset'
  | 'search' | 'submit' | 'tel' | 'text' | 'time'
  | 'url' | 'week'

interface InputComponentProps {
    type?: StrictInputType
    label: string
    error?: string
    inputProps: UseFormRegisterReturn
    textarea?: boolean
}

const InputComponent: React.FC<InputComponentProps> = ({ label, error, inputProps, textarea = false, type='text' }) => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <label htmlFor={label} className='capitalize text-sky-200 focus-within:text-sky-400'>{label}</label>
                {error && <p className="text-red-500">{error}</p>}
            </div>

            {textarea ? (
                <textarea
                    {...inputProps}
                    id={label}
                    name={label}
                    rows={5}
                    className="px-4 py-2 border border-sky-400 outline-none rounded-lg text-sky-200 bg-transparent resize-none focus:outline-none"
                />
            ) : (
                <input
                    {...inputProps}
                    id={label}
                    name={label}
                    type={type}
                    className="px-4 py-2 border border-sky-400 outline-none rounded-lg text-sky-200 bg-transparent focus:outline-none"
                />
            )}            
        </div>
    )
}

export default InputComponent