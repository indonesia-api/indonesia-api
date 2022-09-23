import type { API } from "./types";

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

export { sortByName };
