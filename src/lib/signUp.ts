
export const initSignUpState = [
  //0
    {
      id: 'name',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string) => value.length >= 2,
    },
    //1
    {
      id: 'lastName',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string) => value.length >= 2,
    },
    //2
    {
      id: 'email',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? 'Please enter a valid email address' : '',
      isValid: (value: string) => /\S+@\S+\.\S+/.test(value),
    },
    //3
    {
      id: 'company',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '1 characters required minimum' : '',
      isValid: (value: string) => value.length >= 1,
    },
    //4
    {
      id: 'password',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '8 characters required minimum ' : '',
      isValid: (value: string) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value) ,
    },
    //5 
    {
      id: 'rePassword',
      value: '',
      error: false,
      helperText: '',
      getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
      isValid: (value: string):boolean => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value) 
    },
  ]
  