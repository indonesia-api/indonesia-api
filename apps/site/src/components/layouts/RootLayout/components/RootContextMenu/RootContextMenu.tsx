import {} from "react";
import type { PropsWithChildren } from "react";

import { CornerDownLeft, CornerUpRight, RefreshCcw, Twitter } from "react-feather";

import {
  ContextMenuRoot,
  ContextMenuTrigger,
  ContextMenuPortal,
  ContextMenuContent,
  ContextMenuItem,
  // ContextMenuSeparator,
} from "~/components/core";

import { goBack, goForward, reload } from "./utilities";

type RootContextMenuProps = PropsWithChildren<{}>;

function RootContextMenu(props: RootContextMenuProps) {
  function handleBack() {
    goBack();
  }

  function handleForward() {
    goForward();
  }

  function handleReload() {
    reload();
  }

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger asChild>
        <div className="relative block w-full min-h-screen">{props.children}</div>
      </ContextMenuTrigger>

      <ContextMenuPortal>
        <ContextMenuContent>
          <ContextMenuItem onClick={handleBack} leftElement={<CornerDownLeft className="w-4 h-4" />}>
            Back
          </ContextMenuItem>

          <ContextMenuItem onClick={handleForward} leftElement={<CornerUpRight className="w-4 h-4" />}>
            Forward
          </ContextMenuItem>

          <ContextMenuItem onClick={handleReload} leftElement={<RefreshCcw className="w-4 h-4" />}>
            Reload
          </ContextMenuItem>

          {/* <ContextMenuSeparator /> */}

          {/* <ContextMenuItem onClick={handleShareOnTwitter} leftElement={<Twitter className="w-4 h-4" />}>
              Share on Twitter
            </ContextMenuItem> */}
        </ContextMenuContent>
      </ContextMenuPortal>
    </ContextMenuRoot>
  );
}

export type { RootContextMenuProps };
export default RootContextMenu;
