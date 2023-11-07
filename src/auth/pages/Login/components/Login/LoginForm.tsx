import { useState } from "react";

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
import { initSignUpState } from "../../../../../lib/signUp";

interface LoginForm {
  handleSubmit: () => void;
}

export const LoginForm = ({ handleSubmit }: LoginForm) => {

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginForm, setLoginForm] = useState(initSignUpState);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseDownConfirmPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
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
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      lastName: data.get("lastName"),
      company: data.get("company"),
      password: data.get("password"),
      rePassword: data.get("rePassword"),

    });
  };

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleFormSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
        <TextField
          id={loginForm[0].id}
          name="name"
          label="Name"
          fullWidth
          helperText={loginForm[0].helperText}
          autoComplete="given-name"
          value={loginForm[0].value}
          error={loginForm[0].error}
          onChange={onChange}
        />
        <TextField
          id={loginForm[1].id}
          name="lastName"
          label="Last name"
          fullWidth
          helperText={loginForm[1].helperText}
          autoComplete="family-name"
          value={loginForm[1].value}
          error={loginForm[1].error}
          onChange={onChange}
        />
      </Box>
      <TextField
        id={loginForm[2].id}
        name="email"
        label="Email"
        fullWidth
        helperText={loginForm[2].helperText}
        value={loginForm[2].value}
        error={loginForm[2].error}
        onChange={onChange}
      />
      <TextField
        id={loginForm[3].id}
        name="company"
        label="Company"
        fullWidth
        helperText={loginForm[3].helperText}
        value={loginForm[3].value}
        error={loginForm[3].error}
        onChange={onChange}
      />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
            id={loginForm[4].id}
            name="password"
            value={loginForm[4].value}
            error={loginForm[4].error}
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
          {loginForm[4].error && (
            <FormHelperText error id="accountId-error" sx={{ marginLeft: 0 }}>
            {loginForm[4].helperText}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="repeat_password">Confirm password</InputLabel>
          <OutlinedInput
            id={loginForm[5].id}
            value={loginForm[5].value}
            onChange={onChange}
            error={loginForm[4].error}
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#3F51B5",
          marginTop: 2,
          borderRadius: 100,
        }}
      >
        Sign up
      </Button>
    </Box>
  );
};
