import type { Category, Auth, LinkLabel, API } from "./types";

import { sortByName } from "./utilities";

const AUTHs: Auth[] = ["No", "API Key", "OAuth"];

const CATEGORIEs: Category[] = ["Location", "Other"];

const LINKLABELs: LinkLabel[] = ["Website", "Github"];

const APIs: API[] = sortByName([
  {
    name: "Regions of Indonesia",
    slug: "regions-of-indonesia",
    description: "Regions of Indonesia",
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
    _updated: "18-09-2022",
  },
  {
    name: "BRI API",
    slug: "bri-api",
    description:
      "BRIAPI is Application Programming Interfaces (APIs) developed by BRI that enables your application to integrate with BRI banking services easily and quickly. BRIAPI is helping your company to streamline any financial activities for your customers.",
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
    _updated: "07-10-2022",
  },
  {
    name: "API BCA",
    slug: "api-bca",
    description:
      "API BCA adalah layanan BCA untuk memberikan kemudahan dalam menjalankan berbagai instruksi transaksi keuangan, seperti pengecekan rekening tabungan, cek mutasi rekening, transfer, dan lain-lain, langsung dari paltform/aplikasi/website kamu.",
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
    _updated: "07-10-2022",
  },
  {
    name: "BNI Digital Services",
    slug: "bni-digital-services",
    description:
      "BNI Digital Services Portal was developed as a tool that can be used by prospective partners BNI to get information about the digital payment solutions owned by BNI.",
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
    _updated: "07-10-2022",
  },
  {
    name: "Tokopedia Seller API Services",
    slug: "tokopedia-seller-api-services",
    description:
      "Tokopedia Seller API Services allows you to integrate your system into Tokopedia. You can manage products, orders, and shops using all APIs that we provided in this document.",
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
    _updated: "07-10-2022",
  },
]);

export { AUTHs, CATEGORIEs, LINKLABELs, APIs };
