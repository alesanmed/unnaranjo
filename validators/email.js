import { extend } from 'vee-validate'
import { email } from 'vee-validate/dist/rules.umd'

extend('email', {
  ...email,
  message: 'No parece un email válido'
})
