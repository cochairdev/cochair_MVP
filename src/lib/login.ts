export const initLoginState = [
    {
        id: 'email',
        value: '',
        error: false,
        helperText: '',
        getHelperText: (error: boolean) => error ? 'Please enter a valid email address' : '',
        isValid: (value: string) => /\S+@\S+\.\S+/.test(value),
      },
      {
        id: 'password',
        value: '',
        error: false,
        helperText: '',
        getHelperText: (error: boolean) => error ? '2 characters required minimum' : '',
        isValid: (value: string) => /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/.test(value),
      },
    ]