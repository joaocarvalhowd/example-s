import React from "react";
import InputMask from "react-input-mask";
import { string } from "prop-types";

import { FloatingLabel } from "../";

export default function MaskFloatingLabel({ className, ...props }) {
  return (
    <FloatingLabel
      className={`mask-floating-label ${className}`}
      tag={InputMask}
      {...props}
    />
  );
}

MaskFloatingLabel.propTypes = {
  className: string
};

MaskFloatingLabel.defaultProps = {
  className: ""
};
