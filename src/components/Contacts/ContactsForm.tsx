'use client'

import React from 'react'
import { useMyForm } from './hooks/useMyForm'
import InputComponent from '@/components/Form/InputComponent'
import Button from '@/components/Button/Button'

const ContactsForm = () => {

  const { register, handleSubmit, errors } = useMyForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className='p-6 flex flex-col gap-4 border-r-2 border-r-sky-400 bg-zinc-900 rounded-r-2xl'>

      <InputComponent inputProps={register('name')} label='name' error={errors?.name?.message} />
      <InputComponent type='email' inputProps={register('email')} label='email' error={errors?.email?.message} />
      <InputComponent type='password' inputProps={register('password')} label='password' error={errors?.password?.message} />
      <InputComponent type='tel' inputProps={register('phone')} label='phone' error={errors?.phone?.message} />
      <InputComponent textarea inputProps={register('bio')} label='bio' error={errors?.bio?.message} />

      <Button variant='blue' type='submit' label='Submit' disabled={Object.keys(errors).length > 0} />

    </form>
  )
}

export default ContactsForm