import React from "react";
import { Input } from "reactstrap";
import { oneOfType, bool, func, string } from "prop-types";

export default function BaseInput({
  className,
  as: T,
  inputRef,
  onFocus,
  ...props
}) {
  if (props.readOnly || props.disabled) {
    props.onChange = null;
  }

  return (
    <T
      ref={inputRef}
      className={`base-input ${className}`}
      onFocus={e => {
        const value = e.target.value;
        e.target.value = "";
        e.target.value = value;
        onFocus && onFocus(e);
      }}
      {...props}
    />
  );
}

BaseInput.propTypes = {
  as: oneOfType([func, string]),
  inputRef: func,
  type: string,
  className: string,
  disabled: bool,
  valid: bool,
  readOnly: bool,
  onChange: func,
  onFocus: func
};

BaseInput.defaultProps = {
  as: Input,
  inputRef: _ => _,
  type: "text",
  className: "",
  disabled: false,
  readOnly: false,
  onChange: null,
  onFocus: null
};
