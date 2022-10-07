import path from "path";
import jetpack from "fs-jetpack";
import prettier from "prettier";

import { APIs } from "@indonesia-api/data";
import type { LinkLabel, API } from "@indonesia-api/data";

// CONSTANT

const README = "README.md";
const TARGET = path.resolve(process.cwd(), README);

const TEMPLATE = {
  ">": "<!-- >>>>>>>>>>>>>>>>>>>>>> INDONESIA API >>>>>>>>>>>>>>>>>>>>>> -->",
  "<": "<!-- <<<<<<<<<<<<<<<<<<<<<< INDONESIA API <<<<<<<<<<<<<<<<<<<<<< -->",
};
const LENGTH = {
  ">": TEMPLATE[">"].length,
  "<": TEMPLATE["<"].length,
};

const ICONS = {
  ExternalLink: "![](./assets/svgs/external-link.svg)",
  Github: "![](./assets/svgs/github.svg)",
};
function getLinkLabel(label: LinkLabel) {
  switch (label) {
    case "Github":
      return ICONS.Github;

    default:
      return ICONS.ExternalLink;
  }
}

// UTILITIES

function mdcellwrapjoin(...array: string[]) {
  return "|" + array.join("|") + "|";
}
function nljoin(...array: string[]) {
  return array.join("\n");
}
function mdlink(label: string, url: string) {
  return `[${label}](${new URL(url)})`;
}
function getName(name: string, links: API["links"]) {
  const selected = links.find((link) => link.label === "Website");
  return selected ? mdlink(name, selected.url) : links.length >= 1 ? mdlink(name, links[0].url) : name;
}
function getTemplateContent(text: string) {
  const index = {
    ">": text.indexOf(TEMPLATE[">"]),
    "<": text.indexOf(TEMPLATE["<"]),
  };

  if (index[">"] < 0 || index["<"] < 0) throw new Error("Missing template index");

  const before = text.slice(0, index[">"] + LENGTH[">"]);
  const main = text.slice(index[">"] + LENGTH[">"], index["<"]);
  const after = text.slice(index["<"]);

  return [before, main, after] as const;
}

// MAIN

async function start() {
  const current = await jetpack.readAsync(TARGET);

  if (typeof current !== "string") throw new Error(`${README} not found`);

  const [before, , after] = getTemplateContent(current);

  const table = nljoin(
    mdcellwrapjoin("No", "Nama", "Dekripsi", "Auth", "CORS", "Links"),
    mdcellwrapjoin("-", "-", "-", "-", "-", "-"),
    nljoin(
      ...APIs.map(({ name, description, auth, cors, links }, index) =>
        mdcellwrapjoin(
          (index + 1).toString(),
          getName(name, links),
          description,
          auth.join(", "),
          cors,
          links.map((link) => mdlink(getLinkLabel(link.label), link.url)).join(", ")
        )
      )
    )
  );
  const result = nljoin(before, table, after);

  await jetpack.writeAsync(TARGET, prettier.format(result, { parser: "markdown" }));
  console.log(`${README} updated`);
}

start();
