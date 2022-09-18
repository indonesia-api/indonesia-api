import { useRef } from "react";

import { Plus } from "react-feather";
import { APP } from "~/const";
import AnchorContextMenu from "../AnchorContextMenu";

import style from "./AddAPICard.module.css";

type AddAPICardProps = {};

function AddAPICard(props: AddAPICardProps) {
  const href = useRef(new URL(APP.link.github + "/blob/main/CONTRIBUTING.md").toString());

  return (
    <AnchorContextMenu href={href.current}>
      <a href={href.current} className={style.root}>
        <div className={style.border}>
          <Plus />
        </div>
      </a>
    </AnchorContextMenu>
  );
}

export type { AddAPICardProps };
export default AddAPICard;
