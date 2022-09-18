type Category = "Location" | "Other";
type Auth = "No" | "API Key" | "OAuth";
type CORS = "Yes" | "No" | "Unknown";

type LinkLabel = "Website" | "Github";
type Link = {
  label: LinkLabel;
  url: string;
};

type API = {
  name: string;
  slug: string;
  description: string;
  features: string[];
  categories: Category[];
  auth: Auth;
  cors: CORS;
  links: Link[];

  _created: string /** Tanggal penambahan API pada repo */;
  _updated: string /** Tanggal pembaruan API pada repo */;
};

export type { Category, Auth, CORS, LinkLabel, Link, API };
