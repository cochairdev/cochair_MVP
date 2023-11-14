import { useMemo, useState } from "react";
import { useForm, SubmitHandler , Controller} from "react-hook-form"

import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import { registerUserWithEmailPassword } from "../../../../firebase/providers";
import { useAppDispatch, useAppSelector } from "../../../../store";
type Inputs = {
  name: string
  lastName: string
  email: string
  company:string
  password: string
  confirmPassword: string
}
export const RegisterForm = () => {
  const {errorMessageRegister,status} = useAppSelector((state) => state.auth);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  

  const dispatch = useAppDispatch();

  const isAutenticating = useMemo(() => status === 'checking', [status]);


  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);


  
  const { control, handleSubmit , formState, trigger, watch} = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      company:"",
      password: "",
      confirmPassword: "",
    },
  })
  const {errors,  isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<Inputs> = ({ lastName, email, company, name,password}) => {
    dispatch(registerUserWithEmailPassword({ email,password, name,lastName, company, }))

  }
  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Field is required',
          minLength: {
            value: 3,
            message: 'Min length is 3'
          },
        }}
        render={({ field }) => <TextField {...field} fullWidth label="First name" onBlur={() => trigger('name')} error={!!errors.name} helperText={errors.name?.message}/>} 
      />
      <Controller
        name="lastName"
        control={control}
        rules={{
          required: 'Field is required',
          minLength: {
            value: 2,
            message: '2 characters required minimum'
          },
        }}
        render={({ field }) => <TextField {...field} fullWidth label="Last name" onBlur={() => trigger('lastName')} error={!!errors.lastName} helperText={errors.lastName?.message}/>} 
      />
      </Box>
      <Controller
        name="email"
        control={control}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => <TextField {...field} fullWidth label="Email" onBlur={() => trigger('email')} error={!!errors.email} helperText={errors.email?.message}/>} 
      />
      <Controller
        name="company"
        control={control}
        rules={{
          required: 'Company is required',
          minLength: {
            value: 1,
            message: '1 characters required minimum'
          },
        }}
        render={({ field }) => <TextField {...field} fullWidth label="Company" onBlur={() => trigger('company')} error={!!errors.company} helperText={errors.company?.message}/>} 
      />



      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
              message: 'Must be at least 8 characters, including both numbers and letters',
            },
          }}
          render={({ field }) => (
            <OutlinedInput
              id="password"
              {...field}
              type={showConfirmPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              }
              onBlur={() => trigger('password')} 

              label="Password"
              error={!!errors.password}
            />
          )}
        />
      </FormControl>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="confirmPassword">Confirm password</InputLabel>
        <Controller
          name="confirmPassword"
          control={control}
          
          defaultValue=""
          rules={{
            required: 'Confirm password is required',
            validate: (value) =>
              value === watch('password') || 'Passwords do not match',
          
          }}
          render={({ field }) => (
            <OutlinedInput
              id="confirmPassword"
              {...field}
              type={showConfirmPassword ? "text" : "password"}

              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    <VisibilityOff />
                  </IconButton>
                </InputAdornment>
              }
              onBlur={() => trigger('confirmPassword')} 

              label="Password"
              error={!!errors.password}

            />
          )}
        />
      </FormControl>
        
      </Box>
      
      <FormHelperText error id="accountId-error" sx={{ marginLeft: 0 }}>
        {errors.password?.message || errors.confirmPassword?.message}

      </FormHelperText>
      
      {
        errorMessageRegister && <p>{errorMessageRegister}</p>
      }
      <Button
        type="submit"
        fullWidth
        disabled={!isDirty || !isValid || isAutenticating}
        variant="contained"
        sx={{
          backgroundColor: "#3F51B5",
          marginTop: 2,
          borderRadius: 100,
          textTransform: "none",

        }}
      >
        Sign up
      </Button>
    </Box>
  );
};