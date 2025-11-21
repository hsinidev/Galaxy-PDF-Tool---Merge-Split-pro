
# 🌌 Galaxy PDF Tool - Doodax

[![Deployment Status](https://img.shields.io/badge/Deployment-Live-brightgreen?style=for-the-badge&logo=vercel)](https://pdfTool.doodax.com)
[![React](https://img.shields.io/badge/React-18.2-blue?logo=react&style=for-the-badge)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&style=for-the-badge)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css&style=for-the-badge)](https://tailwindcss.com/)
[![Privacy Focused](https://img.shields.io/badge/Privacy-100%25%20Local-success?style=for-the-badge&logo=adguard)](https://doodax.com)

> **The next-generation secure document manipulation suite.**  
> *Powered by [HSINI MOHAMED](https://github.com/hsinidev)*

<br />

## 🚀 LIVE DEMO
<a href="https://pdfTool.doodax.com" target="_blank">
  <img src="https://img.shields.io/badge/CLICK%20TO%20OPEN-%20pdfTool.doodax.com%20%F0%9F%9A%80-7289da?style=for-the-badge&labelColor=23272a" alt="Live Demo" height="50" />
</a>

---

## 📖 Project Overview

**Galaxy PDF Tool** is a sophisticated Single Page Application (SPA) hosted at [doodax.com](https://doodax.com). It addresses a critical gap in the online productivity market: **Security**.

Most "free" online PDF tools operate by uploading user documents to remote servers for processing. This poses significant risks for confidential data (legal contracts, medical records, financial statements). 

**Galaxy PDF Tool solves this by using a Client-Side Architecture.**
We utilize advanced WebAssembly and JavaScript `Blob` APIs to process files entirely within the user's browser memory. **No file is ever uploaded to a server.**

### Key Features
*   **🔒 Absolute Privacy:** Zero-upload policy.
*   **⚡ Instant Speed:** No upload/download latency.
*   **🎨 Immersive UX:** A stunning, multi-colored nebula background with glassmorphism UI.
*   **🔧 Core Tools:** 
    *   **Merge:** Combine multiple PDFs with drag-and-drop reordering.
    *   **Split:** Extract specific page ranges or burst entire documents into individual pages.
*   **📱 Responsive:** Fully optimized for Mobile, Tablet, and Desktop.

---

## 📂 Project Structure

The architecture is designed for scalability, SEO performance, and maintainability.

```bash
/
├── public/
│   ├── favicon.svg         # Branded identity
│   ├── robots.txt          # SEO crawler directives
│   └── sitemap.xml         # SEO site map for doodax.com
├── components/
│   ├── Layout.tsx          # Core wrapper (Nebula BG, Modal System, Footer)
│   ├── PDFToolUI.tsx       # Main application logic (Merge/Split engine)
│   └── ...
├── utils/
│   └── SeoArticle.tsx      # Schema.org rich snippets & SEO content pillar
├── lib/
│   └── PDFUtils.ts         # Client-side file generation helpers
├── pages/
│   └── index.tsx           # Entry point
└── App.tsx                 # Root component
```

---

## 🛠️ Tech Stack

*   **Frontend:** React 18
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animation:** CSS Keyframes (Nebula/Starfield effects)
*   **SEO:** JSON-LD Structured Data

---

## 👨‍💻 Author

**HSINI MOHAMED**
*   **GitHub:** [hsinidev](https://github.com/hsinidev)
*   **Email:** hsini.web@gmail.com
*   **Website:** [doodax.com](https://doodax.com)

---

## 📄 License

This project is protected. All rights reserved to HSINI MOHAMED.
