import 'yup'

declare module 'yup' {
  interface StringSchema {
    phone(country: string, message?: string): StringSchema
  }
}