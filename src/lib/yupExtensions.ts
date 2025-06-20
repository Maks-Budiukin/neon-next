import * as yup from 'yup'

yup.addMethod(yup.string, 'phone', function (country: string, message: string) {
  return this.test('phone', message, function (value) {
    const { path, createError } = this

    if (!value) return true

    const regexMap: Record<string, RegExp> = {
      ua: /^\+380[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/,
    }

    const regex = regexMap[country]

    return regex?.test(value) || createError({ path, message })
  })
})

export default yup