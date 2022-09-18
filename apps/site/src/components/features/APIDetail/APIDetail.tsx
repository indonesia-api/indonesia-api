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
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          <span className={style.name}>{api.name}</span>

          <div className="flex items-center gap-4 mt-0 mb-2 md:mt-3 md:mb-0 ">
            <div>
              <div className="flex gap-1.5">
                <div className="text-sm px-1.5 lg:px-2 py-0.5 bg-indigo-500 text-neutral-50 rounded-md flex gap-1 lg:gap-2">
                  <span>auth</span>
                  <span>|</span>
                  <span>{api.auth.toLowerCase()}</span>
                </div>
                <div className="text-sm px-1.5 lg:px-2 py-0.5 bg-indigo-500 text-neutral-50 rounded-md flex gap-1 lg:gap-2">
                  <span>cors</span>
                  <span>|</span>
                  <span>{api.cors.toLowerCase()}</span>
                </div>
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
        </div>

        <div>
          <p className={style.description}>{api.description}</p>
        </div>

        <div>
          <div className="my-2">Features</div>
          <ul className="ml-2 list-disc list-inside">
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
