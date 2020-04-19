import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules.umd'

extend('required', {
  ...required,
  message: (fieldName) => {
    if (fieldName !== '{field}') {
      return `El campo ${fieldName} es obligatorio`
    } else {
      return 'Obligatorio'
    }
  }
})
