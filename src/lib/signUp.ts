
export const initSignUpState = [
    {
      id: 'name',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string) => /^[a-zA-Z]{2,}$/.test(value),
    },
    {
      id: 'lastName',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string) => /^[a-zA-Z]{2,}$/.test(value),
    },
    {
      id: 'email',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? 'Please enter a valid email address' : '',
      isValid: (value: string) => /\S+@\S+\.\S+/.test(value),
    },
    {
      id: 'company',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string) => /^[a-zA-Z]{3,}$/.test(value),
    },
    {
      id: 'password',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value),
    },
    {
      id: 'rePassword',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value) ,
    },
  ]
  