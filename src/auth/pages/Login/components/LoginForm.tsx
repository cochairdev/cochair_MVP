import { useMemo, useState, useEffect } from "react";

import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  FormHelperText,
  Alert
} from "@mui/material";
import { useForm, SubmitHandler , Controller} from "react-hook-form"

import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useAppSelector, useAppDispatch } from "../../../../store";
import { handleLoginEmailPassword } from "../../../../firebase/providers";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string
  password: string

}

export const LoginForm = () => {

  const {errorMessageLogin, success} = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  

  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const { control, handleSubmit , formState, trigger} = useForm({
    defaultValues: {
      email:"",
      password: "",
    },
  })
  const {errors,  isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<Inputs> = ({email,password}) => {
    dispatch(handleLoginEmailPassword({email:email, password:password}))
  }
  useEffect(() => {
    if (success) navigate('/auth/verification-email')

  }, [success, navigate])

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
    >
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

       <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: 'Password is required',
            
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
        {
          errors.password?.message && (
            <FormHelperText error id="accountId-error" sx={{ marginLeft: 0 }}>
           { errors.password?.message}
    
          </FormHelperText>
          )

        }
    
      </FormControl>
      {
        errorMessageLogin && <Alert severity="error">{errorMessageLogin}</Alert>
      }
      
      <Button
        type="submit"
        disabled={!isDirty || !isValid }
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#3F51B5",
          marginTop: 2,
          borderRadius: 100,
          textTransform: "none",
        }}
      >
        Log in
      </Button>
    </Box>
  );
};