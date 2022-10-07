import type { Category, Auth, LinkLabel, API } from "./types";

import { sortByName } from "./utilities";

const AUTHs: Auth[] = ["No", "API Key", "OAuth"];

const CATEGORIEs: Category[] = ["Location", "Other"];

const LINKLABELs: LinkLabel[] = ["Website", "Github"];

const APIs: API[] = sortByName([
  {
    name: "Regions of Indonesia",
    slug: "regions-of-indonesia",
    description: "API Wilayah Indonesia",
    features: ["Dynamic API & Static API", "Search API", "Javascript client SDK"],
    categories: ["Location"],
    auth: ["No"],
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
    status: "Active",
    _created: "18-09-2022",
    _updated: "08-10-2022",
  },
  {
    name: "BRI API",
    slug: "bri-api",
    description: "Integrasi dengan layanan Bank BRI.",
    features: [
      "BRI Direct Debit",
      "BRIZZI",
      "BRIVA",
      "Transfer to BRI Account",
      "Transfer to Other Banks",
      "Cardless Cash Withdrawal",
      "QRIS Merchant Presented Mode (MPM) Static",
      "QRIS Merchant Presented Mode (MPM) Dynamic",
      "QRIS Merchant Presented mode (MPM) Dynamic Notification",
      "Account Statement",
      "Account Information",
    ],
    categories: ["Financial"],
    auth: ["OAuth"],
    cors: "Unknown",
    links: [
      {
        label: "Website",
        url: "https://developers.bri.co.id",
      },
    ],
    status: "Active",
    _created: "07-10-2022",
    _updated: "08-10-2022",
  },
  {
    name: "API BCA",
    slug: "api-bca",
    description: "Integrasi dengan layanan Bank BCA.",
    features: [
      "Informasi Rekening",
      "Kuasa Pendebetan Rekening",
      "Virtual Account untuk Biller",
      "Transfer ke Rekening Virtual Account BCA",
      "Quick Response Indonesian Standard (QRIS) MPM",
      "Transfer Dana",
      "Collection",
      "OneKlik",
      "Valuta Asing",
      "Informasi Umum",
      "Financing",
      "FIRE",
      "Top Up Flazz",
      "Sakuku Commerce",
    ],
    categories: ["Financial"],
    auth: ["OAuth"],
    cors: "Unknown",
    links: [
      {
        label: "Website",
        url: "https://developer.bca.co.id",
      },
    ],
    status: "Active",
    _created: "07-10-2022",
    _updated: "08-10-2022",
  },
  {
    name: "BNI Digital Services",
    slug: "bni-digital-services",
    description: "Integrasi dengan layanan Bank BNI.",
    features: [
      "One Gate Payment",
      "Remittance",
      "P2P Lending",
      "RDN Service",
      "Tapcash",
      "Rate Inquiry",
      "BNIDirect",
      "Digiloan Consumptive Disbursement",
      "Online Debit",
      "Sharing Billers",
      "Utility",
      "BNI eCollection",
    ],
    categories: ["Financial"],
    auth: ["API Key", "OAuth"],
    cors: "Unknown",
    links: [
      {
        label: "Website",
        url: "https://digitalservices.bni.co.id",
      },
    ],
    status: "Active",
    _created: "07-10-2022",
    _updated: "08-10-2022",
  },
  {
    name: "Tokopedia Seller API Services",
    slug: "tokopedia-seller-api-services",
    description: "Integrasi seller dengan sistem Tokopedia.",
    features: ["Webhooks API", "Product API", "Order API", "Logistic API", "Shop API", "Finance API", "Interaction API", "Campaign API"],
    categories: ["Marketplace"],
    auth: ["OAuth"],
    cors: "Unknown",
    links: [
      {
        label: "Website",
        url: "https://developer.tokopedia.com",
      },
    ],
    status: "Active",
    _created: "07-10-2022",
    _updated: "08-10-2022",
  },
]);

export { AUTHs, CATEGORIEs, LINKLABELs, APIs };
