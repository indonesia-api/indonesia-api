import {} from "react";

import type { API } from "@indonesia-api/data";

import cx from "classnames";

import { IconButtonLink } from "~/components/core";

import { getLinkIcon } from "../APICard";

import style from "./APIDetail.module.css";

type APIDetailProps = {
  api: API;
};

function APIDetail(props: APIDetailProps) {
  const { api } = props;

  return (
    <div className={cx(style.root)}>
      <div className={style.stack}>
        <div className="flex items-center gap-4">
          <span className={style.name}>{api.name}</span>

          <div>
            <div className="flex gap-1.5">
              <div className="text-sm px-1.5 py-0.5 bg-indigo-500 text-neutral-50 rounded-md">auth | {api.auth.toLowerCase()}</div>
              <div className="text-sm px-1.5 py-0.5 bg-indigo-500 text-neutral-50 rounded-md">cors | {api.cors.toLowerCase()}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {api.links.map((link, index) => (
              <IconButtonLink key={index.toString()} href={link.url} target="_blank" rel="noopener noreferrer">
                {getLinkIcon(link)}
              </IconButtonLink>
            ))}
          </div>
        </div>

        <div>
          <p className={style.description}>{api.description}</p>
        </div>

        <div>
          <ul className="list-disc list-inside">
            {api.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="flex items-end justify-between mt-4"></div>
      </div>
    </div>
  );
}

export type { APIDetailProps };
export default APIDetail;
