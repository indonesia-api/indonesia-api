import {} from "react";
import type { PropsWithChildren } from "react";

import { GitHub } from "react-feather";

import { IconButtonLink } from "~/components/core";
import { AnchorContextMenu } from "~/components/features";

import { RootContextMenu } from "./components";

type RootLayoutProps = PropsWithChildren<{}>;

function RootLayout(props: RootLayoutProps) {
  return (
    <RootContextMenu>
      <header className="container mx-auto">
        <div className="flex items-center justify-between h-24 p-4">
          <div className="text-4xl font-bold">
            <AnchorContextMenu href="/">
              <a href="/" className="px-2 py-1 rounded-lg outline-none focus-visible:ring ring-indigo-300">
                Indonesia API
              </a>
            </AnchorContextMenu>
          </div>

          <nav>
            <ul>
              <li>
                <IconButtonLink href="/">
                  <GitHub className="w-5 h-5" />
                </IconButtonLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto">{props.children}</main>

      <footer className="container mx-auto">
        <div className="flex items-center justify-center h-32 p-4">
          <div className="transition opacity-50 hover:opacity-100">
            <a href="/" className="font-medium rounded-sm outline-none select-none focus-visible:ring ring-indigo-300">
              © 2022 - Indonesia API
            </a>
          </div>
        </div>
      </footer>
    </RootContextMenu>
  );
}

export type { RootLayoutProps };
export default RootLayout;
