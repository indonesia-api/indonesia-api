import type { Category, Auth, LinkLabel, API } from "./types";

const AUTHs: Auth[] = ["No", "API Key", "OAuth"];

const CATEGORIEs: Category[] = ["Location", "Other"];

const LINKLABELs: LinkLabel[] = ["Website", "Github"];

function sortByName(data: API[]): API[] {
  return [
    ...data.sort((a, b) => {
      let x = a.name.toLowerCase();
      let y = b.name.toLowerCase();
      if (x > y) return 1;
      if (x < y) return -1;
      return 0;
    }),
  ];
}

const APIs: API[] = sortByName([
  {
    name: "Regions of Indonesia",
    slug: "regions-of-indonesia",
    description: "Regions of Indonesia",
    features: ["Dynamic API & Static API", "Search API", "Javascript client SDK"],
    categories: ["Location"],
    auth: "No",
    cors: "Yes",
    links: [
      {
        label: "Website",
        url: "https://regions-of-indonesia.netlify.app",
      },
      {
        label: "Github",
        url: "https://github.com/regions-of-indonesia",
      },
    ],
    _created: "18-09-2022",
    _updated: "18-09-2022",
  },
]);

export { AUTHs, CATEGORIEs, LINKLABELs, APIs };
