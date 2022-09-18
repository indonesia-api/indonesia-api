import { forwardRef } from "react";
import type { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

import { Root, Trigger, Portal, Content, Item, Separator } from "@radix-ui/react-context-menu";
import type {
  ContextMenuProps,
  ContextMenuTriggerProps,
  ContextMenuPortalProps,
  ContextMenuContentProps,
  ContextMenuItemProps as RadixContextMenuItemProps,
  ContextMenuSeparatorProps,
} from "@radix-ui/react-context-menu";

import cx from "classnames";

import style from "./ContextMenu.module.css";

function ContextMenuRoot(props: ContextMenuProps) {
  return <Root {...props} />;
}

const ContextMenuTrigger = forwardRef<HTMLSpanElement, ContextMenuTriggerProps>((props, ref) => {
  return <Trigger ref={ref} {...props} />;
});

function ContextMenuPortal(props: ContextMenuPortalProps) {
  return <Portal {...props} />;
}

const ContextMenuContent = forwardRef<HTMLDivElement, ContextMenuContentProps>(({ className, ...props }, ref) => {
  return <Content ref={ref} className={cx(style["content"], className)} {...props} />;
});

type ContextMenuItemProps = RadixContextMenuItemProps & {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
};
const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ leftElement, rightElement, className, children, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        className={cx(
          style["item"],
          leftElement ? style["item-with-left-element"] : style["item-without-left-element"],
          rightElement ? style["item-with-right-element"] : style["item-without-right-element"],
          className
        )}
        {...props}
      >
        {leftElement && <div className={style["item-left-element"]}>{leftElement}</div>}

        {children}

        {rightElement && <div className={style["item-right-element"]}>{rightElement}</div>}
      </Item>
    );
  }
);

const ContextMenuSeparator = forwardRef<HTMLDivElement, ContextMenuSeparatorProps>(({ className, ...props }, ref) => {
  return <Separator ref={ref} className={cx(style["separator"], className)} {...props} />;
});

export type {
  ContextMenuProps,
  ContextMenuTriggerProps,
  ContextMenuPortalProps,
  ContextMenuContentProps,
  ContextMenuItemProps,
  ContextMenuSeparatorProps,
};
export { ContextMenuRoot, ContextMenuTrigger, ContextMenuPortal, ContextMenuContent, ContextMenuItem, ContextMenuSeparator };
