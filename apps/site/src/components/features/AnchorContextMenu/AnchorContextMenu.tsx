import {} from "react";
import type { PropsWithChildren } from "react";

import { ExternalLink } from "react-feather";

import {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuItem,
  // ContextMenuSeparator,
} from "~/components/core";
import { openLinkInNewTab, openLinkInNewWindow } from "./utilities";

type AnchorContextMenuProps = PropsWithChildren<{
  href?: string;
}>;

function AnchorContextMenu(props: AnchorContextMenuProps) {
  const href = props.href;

  function handleOpenLinkInNewTab() {
    if (href) openLinkInNewTab(href);
  }

  function handleOpenLinkInNewWindow() {
    if (href) openLinkInNewWindow(href);
  }

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger asChild>{props.children}</ContextMenuTrigger>

      <ContextMenuPortal>
        <ContextMenuContent>
          <ContextMenuItem onClick={handleOpenLinkInNewTab} rightElement={<ExternalLink className="w-4 h-4" />}>
            Open link in new tab
          </ContextMenuItem>

          <ContextMenuItem onClick={handleOpenLinkInNewWindow} rightElement={<ExternalLink className="w-4 h-4" />}>
            Open link in new window
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenuPortal>
    </ContextMenuRoot>
  );
}

export type { AnchorContextMenuProps };
export default AnchorContextMenu;
