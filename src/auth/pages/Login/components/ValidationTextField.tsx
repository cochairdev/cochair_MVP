import React from 'react'

interface Props{
    helperText: string
}
export const ValidationTextField = ({helperText}:Props) => {
    const classes = useStyles(helperText)();

  return (
    <TextField
    label="Name"
    margin="normal"
    variant="outlined"
    required
    error={helperText !== ""}
    helperText={helperText}
    className={classes.root}
  />
  )
}
