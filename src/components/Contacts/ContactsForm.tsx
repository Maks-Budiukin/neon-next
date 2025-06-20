'use client'

import React, { useState } from 'react'

const ContactsForm = () => {

    const [name, setName] = useState()


    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <form action="onSubmit">
    </form>
  )
}

export default ContactsForm