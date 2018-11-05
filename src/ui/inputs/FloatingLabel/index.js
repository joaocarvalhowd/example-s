import React from "react";
import { FormGroup, Label } from "reactstrap";
import { string } from "prop-types";

import "./styles.css";

import { BaseInput } from "../";

export default function FloatingLabel({
  className,
  label,
  placeholder,
  ...props
}) {
  return (
    <FormGroup className={`floating-label ${className}`}>
      <BaseInput placeholder={placeholder} {...props} />
      <Label>{label}</Label>
    </FormGroup>
  );
}

FloatingLabel.propTypes = {
  className: string,
  label: string.isRequired,
  placeholder: string.isRequired
};

FloatingLabel.defaultProps = {
  className: ""
};
