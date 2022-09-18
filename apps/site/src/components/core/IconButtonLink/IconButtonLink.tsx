import { forwardRef } from "react";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import cx from "classnames";

import { AnchorContextMenu } from "~/components/features";

import style from "./IconButtonLink.module.css";

type IconButtonLinkProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const IconButtonLink = forwardRef<HTMLAnchorElement, IconButtonLinkProps>(({ className, ...props }, ref) => {
  return (
    <AnchorContextMenu href={props.href}>
      <a ref={ref} className={cx(style.root, className)} {...props} />
    </AnchorContextMenu>
  );
});

export type { IconButtonLinkProps };
export default IconButtonLink;
