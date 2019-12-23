import React from "react";
import { func, string } from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

import { InputContainer } from "./styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function SendMessage({ sendMessage, inputLabel }) {
  const classes = useStyles();

  return (
    <InputContainer className={classes.root} noValidate autoComplete="off">
      <TextField label={inputLabel} onKeyPress />
    </InputContainer>
  );
}

SendMessage.defaultProps = {
  sendMessage: Function.prototype,
  inputLabel: ""
};

SendMessage.propTypes = {
  sendMessage: func,
  inputLabel: string
};
