
import React from 'react';
import PDFToolUI from '../components/PDFToolUI';
import SeoArticle from '../utils/SeoArticle';

const IndexPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 mb-4 leading-tight">
          Secure PDF Merger & Splitter
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Combine, reorder, and extract pages from your PDFs directly in your browser. Fast, private, and no uploads required.
        </p>
      </header>

      <main>
        <PDFToolUI />
        <SeoArticle />
      </main>
    </div>
  );
};

export default IndexPage;
