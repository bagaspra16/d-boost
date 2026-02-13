# D-BOOST – Deploy ke Vercel

Panduan singkat untuk deploy landing D-BOOST ke Vercel dengan SEO dan env siap production.

## Prerequisites

- Akun [Vercel](https://vercel.com)
- Repo Git (GitHub / GitLab / Bitbucket) sudah push

## Deploy dari Vercel Dashboard

1. **Import project**
   - Login ke [vercel.com](https://vercel.com) → **Add New** → **Project**
   - Import repo yang berisi folder `d-boost` (atau root jika monorepo hanya berisi Next.js)
   - **Root Directory**: pilih folder `d-boost` jika project ada di subfolder
   - **Framework Preset**: Next.js (auto-detect)
   - **Build Command**: `next build` (default)
   - **Output Directory**: default (Vercel pakai output Next.js)
   - **Install Command**: `npm install` (default)

2. **Environment Variables (optional)**

   Di **Settings → Environment Variables** tambah:

   | Name                     | Value                    | Environment   |
   |--------------------------|--------------------------|---------------|
   | `NEXT_PUBLIC_SITE_URL`   | `https://your-domain.com`| Production    |
   | `NEXT_PUBLIC_GA_ID`      | `G-XXXXXXXXXX`           | Production (optional) |
   | `NEXT_PUBLIC_WEB3FORMS_KEY` | your-key              | Production (optional) |

   - **NEXT_PUBLIC_SITE_URL**: wajib diisi dengan URL production (domain custom atau `https://xxx.vercel.app`). Dipakai untuk SEO: canonical, sitemap, Open Graph, JSON-LD. **Tanpa trailing slash.**
   - **NEXT_PUBLIC_GA_ID**: hanya jika pakai Google Analytics.
   - **NEXT_PUBLIC_WEB3FORMS_KEY**: hanya jika form Early Access dipakai.

3. **Deploy**
   - Klik **Deploy**. Vercel akan build dan deploy.
   - Setelah selesai, site live di `https://<project>.vercel.app`.

## Custom domain

- **Settings → Domains** → Add domain (mis. `d-boost.com`).
- Set **NEXT_PUBLIC_SITE_URL** ke `https://d-boost.com` (tanpa trailing slash) agar SEO (canonical, OG, sitemap) mengarah ke domain tersebut.

## SEO yang sudah disiapkan

- **Metadata**: title, description, keywords, Open Graph, Twitter Card, `metadataBase` untuk URL absolut.
- **Sitemap**: `/sitemap.xml` (generate dari `app/sitemap.ts`).
- **Robots**: `/robots.txt` (generate dari `app/robots.ts`), mengarah ke sitemap.
- **JSON-LD**: Organization & WebSite di layout.
- **Canonical** & **robots** (index/follow) di root dan halaman Early Access.

## Cek setelah deploy

1. **Build**: Pastikan **Deployments** sukses (build hijau).
2. **URL**: Buka `https://<your-url>/sitemap.xml` dan `https://<your-url>/robots.txt`.
3. **OG**: Tes share link di Twitter/Facebook/LinkedIn (atau [opengraph.xyz](https://www.opengraph.xyz/)).
4. **Analytics**: Jika pakai GA, pastikan `NEXT_PUBLIC_GA_ID` sudah di-set di Environment Variables production.

## Troubleshooting

- **Build gagal**: Jalankan `npm run build` di lokal. Perbaiki error TypeScript/ESLint lalu push lagi.
- **OG image tidak muncul**: Pastikan `public/images/og-image.jpg` ada (1200×630 px disarankan) dan `NEXT_PUBLIC_SITE_URL` benar.
- **Sitemap/robots salah domain**: Set **NEXT_PUBLIC_SITE_URL** di Vercel sesuai domain production (no trailing slash).
