# Contributing

Semua packages dan apps menggunakan [typesript](https://www.typescriptlang.org).

Install package menggunakan [yarn](https://yarnpkg.com/) (jika belum terinstall)

```bash
yarn
```

## Site

Kontribusi pengembangan website pada folder [site](/apps/site). Dibuat menggunakan [Next.js](https://nextjs.org/) dan [Tailwind CSS](https://tailwindcss.com/).

## Data

Format data dapat dilihat di [types](/packages/data/src/types.ts), lalu tinggal menambahkan api di [data](/packages/data/src/data.ts).

Jika sudah menambahkan data dengan benar, dapat menjalankan script

```bash
yarn run build:readme
```

Kemudian lakukan pull request.

_CATATAN : Tidak menerima API yang ber-unsur negatif_

## Badge

Tersedia juga badge [![](./public/Badge.svg)](./public/Badge.svg) apabila ingin mencantumkan pada repository.

```markdown
<a href="https://indonesia-api.netlify.app/SLUG"><img src="https://raw.githubusercontent.com/indonesia-api/indonesia-api/main/public/Badge.svg?sanitize=true" /></a>
```

---

## Thanks

_Terimakasih telah berkontribusi_
