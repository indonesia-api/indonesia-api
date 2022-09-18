import { forwardRef } from "react";
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import cx from "classnames";

import style from "./IconButton.module.css";

type IconButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(({ className, ...props }, ref) => {
  return <button ref={ref} className={cx(style.root, className)} {...props} />;
});

export type { IconButtonProps };
export default IconButton;
