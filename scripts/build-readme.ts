import path from "path";
import jetpack from "fs-jetpack";
import prettier from "prettier";
import consola from "consola";

import { APIs } from "@indonesia-api/data";
import type { Auth, LinkLabel, Link, API } from "@indonesia-api/data";

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
function p(content: string) {
  return `<p>${content}</p>`;
}
function ul(content: string) {
  return `<ul>${content}</ul>`;
}
function li(content: string) {
  return `<li>${content}</li>`;
}
function expandable(title: string, content: string, options: { open?: boolean } = {}) {
  return `<details${options.open ? " open" : ""}><summary>${title}</summary>${content}</details>`;
}
function getNo(index: number) {
  return `${index + 1}`;
}
function getName(name: string, links: API["links"]) {
  const selected = links.find((link) => link.label === "Website");
  return selected ? mdlink(name, selected.url) : links.length >= 1 ? mdlink(name, links[0].url) : name;
}
function getDescription(description: string, features: string[]) {
  return [p(description), expandable("Fitur", ul(features.map((feature) => li(feature)).join("")))].join("");
}
function getAuth(auth: Auth[]) {
  return auth.join(", ");
}
function getCORS(cors: string) {
  return cors;
}
function getLinks(links: Link[]) {
  return links.map((link) => mdlink(getLinkLabel(link.label), link.url)).join(" ");
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

  const slugs = APIs.map((api) => api.slug);

  const duplicates = [...new Set(slugs.filter((slug) => slugs.indexOf(slug) !== slugs.lastIndexOf(slug)))];

  if (duplicates.length > 0) {
    consola.error(`Terdapat slug yang sama : ${duplicates.join(", ")}`);
    consola.info("API slug harus unik");
    return;
  }

  const table = nljoin(
    mdcellwrapjoin("No", "Nama", "Deskripsi", "Auth", "CORS", "Links"),
    mdcellwrapjoin("-", "-", "-", "-", "-", "-"),
    nljoin(
      ...APIs.map(({ name, description, features, auth, cors, links }, index) =>
        mdcellwrapjoin(
          getNo(index),
          getName(name, links),
          getDescription(description, features),
          getAuth(auth),
          getCORS(cors),
          getLinks(links)
        )
      )
    )
  );
  const result = nljoin(before, table, after);

  await jetpack.writeAsync(TARGET, prettier.format(result, { parser: "markdown" }));

  consola.success(`${README} updated`);
}

start();
