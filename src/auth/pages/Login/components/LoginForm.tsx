import { useMemo, useState } from "react";

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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import { initLoginState } from "../../../../lib";
import { useAppSelector } from "../../../../store";

export const LoginForm = () => {

  const {status} = useAppSelector((state) => state.auth);

  const isAutenticating = useMemo(() => status === 'checking', [status]);

  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState(initLoginState);

  

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {event.preventDefault();};

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;

    const newInputs = [...loginForm];
    const index = newInputs.findIndex((item) => item.id === id);
    const input = newInputs[index];
    const isValid = input.isValid(value);

    newInputs[index] = {
      ...input,
      value,
      error: !isValid,
      helperText: input.getHelperText(!isValid),
    };

    setLoginForm(newInputs);

  };
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    //handleSubmit();


  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleFormSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
    >
       
      <TextField
        id={loginForm[0].id}
        name="email"
        label="Email"
        type="email"
        fullWidth
        helperText={loginForm[0].helperText}
        value={loginForm[0].value}
        error={loginForm[0].error}
        onChange={onChange}
      />

      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id={loginForm[1].id}
          name="password"
          value={loginForm[1].value}
          error={loginForm[1].error}
          onChange={onChange}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        {loginForm[1].error && (
          <FormHelperText error id="accountId-error" sx={{ marginLeft: 0 }}>
            {loginForm[1].helperText}
          </FormHelperText>
        )}
      </FormControl>

      <Button
        type="submit"
        disabled={loginForm[1].error || loginForm[0].error || loginForm[0].value === '' || loginForm[1].value === '' || isAutenticating}
        fullWidth
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