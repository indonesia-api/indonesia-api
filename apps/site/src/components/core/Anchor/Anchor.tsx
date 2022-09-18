import { forwardRef } from "react";
import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

import cx from "classnames";

import { AnchorContextMenu } from "~/components/features";

import style from "./Anchor.module.css";

type AnchorProps = DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(({ className, ...props }, ref) => {
  return (
    <AnchorContextMenu href={props.href}>
      <a ref={ref} className={cx(style.root, className)} {...props} />
    </AnchorContextMenu>
  );
});

export type { AnchorProps };
export default Anchor;
