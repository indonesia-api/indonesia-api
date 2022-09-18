import {} from "react";

import NextLink from "next/link";

import { ExternalLink, GitHub } from "react-feather";

import type { API, Link } from "@indonesia-api/data";

import cx from "classnames";

import { Anchor, IconButtonLink } from "~/components/core";

import style from "./APICard.module.css";

function getLinkIcon(link: Link) {
  switch (link.label) {
    case "Github":
      return <GitHub className="w-4 h-4" />;

    default:
      return <ExternalLink className="w-4 h-4" />;
  }
}

type APICardProps = {
  api: API;
};

function APICard(props: APICardProps) {
  const { api } = props;

  return (
    <div className={cx(style.root)}>
      <div className={style.stack}>
        <div>
          <NextLink href={`/${api.slug}`} passHref>
            <Anchor className={style.name}>{api.name}</Anchor>
          </NextLink>
        </div>

        <div className="flex-grow">
          <p className={style.description}>{api.description}</p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex gap-1.5">
            <div className="text-sm px-1.5 py-0.5 rounded-md">auth | {api.auth.toLowerCase()}</div>
            <div className="text-sm px-1.5 py-0.5 rounded-md">cors | {api.cors.toLowerCase()}</div>
          </div>

          <div className="flex items-center gap-2">
            {api.links.map((link, index) => (
              <IconButtonLink key={index.toString()} href={link.url} target="_blank" rel="noopener noreferrer">
                {getLinkIcon(link)}
              </IconButtonLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export type { APICardProps };
export { getLinkIcon };
export default APICard;
