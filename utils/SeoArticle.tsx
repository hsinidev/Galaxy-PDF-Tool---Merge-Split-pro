
import React, { useState } from 'react';

const SeoArticle: React.FC = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "url": "https://doodax.com/",
                "name": "Doodax PDF Tools",
                "description": "Secure, free, and private online PDF merger and splitter tool. No file uploads required.",
                "publisher": {
                    "@type": "Organization",
                    "name": "Doodax",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://doodax.com/favicon.svg"
                    }
                }
            },
            {
                "@type": "WebApplication",
                "name": "Galaxy PDF Tool - Doodax",
                "url": "https://doodax.com/",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Any",
                "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "USD"
                },
                "featureList": ["Merge PDF", "Split PDF", "Reorder Pages", "Client-Side Security"],
                "author": {
                    "@type": "Person",
                    "name": "HSINI MOHAMED",
                    "url": "https://github.com/hsinidev"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Is it safe to merge sensitive documents on Doodax.com?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, absolutely. Doodax utilizes client-side technology (WebAssembly), meaning your files are processed exclusively on your own device. They are never uploaded to our servers, ensuring 100% privacy for sensitive legal or financial documents."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I split a PDF into individual pages?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Simply upload your file to the 'Split PDF' tab, select 'Extract every page into a separate file', and click download. You will receive a ZIP file containing all pages as separate PDFs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is Doodax PDF Tool free to use?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Doodax is completely free. We believe in accessible privacy tools for everyone."
                        }
                    },
                    {
                         "@type": "Question",
                         "name": "Who developed Doodax?",
                         "acceptedAnswer": {
                             "@type": "Answer",
                             "text": "Doodax is powered by HSINI MOHAMED, a web developer focused on creating secure, high-performance web applications."
                         }
                    }
                ]
            }
        ]
    };

    return (
        <section className="mt-20 max-w-5xl mx-auto px-4 mb-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-indigo-500/20 overflow-hidden">
                <div className="p-8 md:p-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-white to-teal-400 mb-8 text-center tracking-tight">
                        The Ultimate Guide to Secure PDF Processing
                    </h2>
                    
                    {/* Content Container with line-clamp logic */}
                    <div className={`relative text-gray-300 leading-relaxed space-y-6 transition-all duration-500 ease-in-out ${!isExpanded ? 'line-clamp-2 overflow-hidden max-h-[3.5rem]' : 'h-auto'}`}>
                        
                        <p className="text-lg md:text-xl font-light text-gray-200">
                            In the modern digital ecosystem, the Portable Document Format (PDF) stands as the universal standard for document exchange. However, managing these files—specifically merging and splitting them—often comes with a hidden cost: <strong>data privacy</strong>. Doodax.com revolutionizes this by offering a powerful, client-side solution powered by HSINI MOHAMED.
                        </p>

                        {/* ONLY RENDERED IF EXPANDED TO SAVE DOM NODES IN COLLAPSED STATE? No, need for SEO crawling. 
                            Actually, for SEO, the content should be in the DOM. CSS truncation is fine. 
                        */}
                        
                        <div className="mt-8 space-y-10">
                             {/* Table of Contents */}
                            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/50">
                                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">Table of Contents</h3>
                                <nav>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-indigo-300 text-sm md:text-base">
                                        <li><a href="#chapter-1" className="hover:text-white hover:underline">1. The Privacy Risks of Online PDF Tools</a></li>
                                        <li><a href="#chapter-2" className="hover:text-white hover:underline">2. Client-Side Technology: How Doodax Works</a></li>
                                        <li><a href="#chapter-3" className="hover:text-white hover:underline">3. Step-by-Step: Merging Multiple PDFs</a></li>
                                        <li><a href="#chapter-4" className="hover:text-white hover:underline">4. Master Class: Splitting and Extraction</a></li>
                                        <li><a href="#chapter-5" className="hover:text-white hover:underline">5. Performance & Compatibility</a></li>
                                        <li><a href="#faq" className="hover:text-white hover:underline">6. Frequently Asked Questions (FAQ)</a></li>
                                    </ul>
                                </nav>
                            </div>

                            <article id="chapter-1">
                                <h3 className="text-2xl font-bold text-teal-400 mb-4">1. The Privacy Risks of Online PDF Tools</h3>
                                <p className="mb-4">
                                    Most free PDF tools available online operate on a server-side model. This means when you use them, you are actively uploading your documents to a remote server owned by a third party. While many of these services are legitimate, this process creates an inherent security risk. Your sensitive contracts, medical records, or financial statements travel across the internet, are stored (temporarily or permanently) on a hard drive you don't control, and are processed by software you cannot audit.
                                </p>
                                <p>
                                    <strong>Doodax.com</strong> eliminates this risk entirely. By leveraging the power of modern web browsers and WebAssembly, we have moved the processing engine from the server to your device. This is akin to installing software on your computer, but with the convenience of a website.
                                </p>
                            </article>

                            <article id="chapter-2">
                                <h3 className="text-2xl font-bold text-indigo-400 mb-4">2. Client-Side Technology: How Doodax Works</h3>
                                <p className="mb-4">
                                    Powered by the innovations of HSINI MOHAMED, Doodax uses JavaScript libraries and binary data processing to manipulate PDF structures directly in your RAM. When you select a file, the browser reads the file specifically as an `ArrayBuffer`. The application then parses the PDF's catalog, pages tree, and cross-reference table locally.
                                </p>
                                <p>
                                    This architecture ensures that <strong>zero bytes</strong> of your document data are ever sent to the cloud. If you were to disconnect your internet connection after loading Doodax.com, the tool would continue to function perfectly. This is the ultimate proof of our privacy-first commitment.
                                </p>
                            </article>

                            <article id="chapter-3">
                                <h3 className="text-2xl font-bold text-purple-400 mb-4">3. Step-by-Step: Merging Multiple PDFs</h3>
                                <p className="mb-4">
                                    Merging documents is essential for organization. Whether you are a student compiling assignments or a real estate agent organizing disclosure forms, Doodax makes it intuitive.
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-gray-400">
                                    <li><strong>Batch Selection:</strong> You can select dozens of files at once.</li>
                                    <li><strong>Drag-and-Drop Sorting:</strong> Order matters. Our UI allows you to visually arrange your documents before processing.</li>
                                    <li><strong>Instant Generation:</strong> Because there is no upload/download latency, the merged file is generated almost instantly.</li>
                                </ul>
                            </article>

                            <article id="chapter-4">
                                <h3 className="text-2xl font-bold text-teal-400 mb-4">4. Master Class: Splitting and Extraction</h3>
                                <p className="mb-4">
                                    Splitting a PDF is often more complex than merging. You might need pages 1-5 for a client, page 8 for your records, and pages 10-12 for the accountant. Doodax provides a flexible "Range" input system.
                                </p>
                                <p>
                                    By typing <code>1-5, 8, 10-12</code>, our engine parses the command, extracts the specific page dictionaries from the PDF source, creates a new document structure, and builds a fresh PDF containing only those pages. Alternatively, the "Burst" mode automates the tedious task of saving every single page as a new file, packaging them neatly into a ZIP archive.
                                </p>
                            </article>

                             <article id="chapter-5">
                                <h3 className="text-2xl font-bold text-indigo-400 mb-4">5. Performance & Compatibility</h3>
                                <p className="mb-4">
                                    Doodax is built with <strong>React</strong> and <strong>Tailwind CSS</strong>, ensuring a responsive, lightweight experience. It works seamlessly on:
                                </p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm font-semibold text-gray-500 mt-4">
                                    <div className="bg-gray-800 p-3 rounded-lg">Google Chrome</div>
                                    <div className="bg-gray-800 p-3 rounded-lg">Mozilla Firefox</div>
                                    <div className="bg-gray-800 p-3 rounded-lg">Apple Safari</div>
                                    <div className="bg-gray-800 p-3 rounded-lg">Microsoft Edge</div>
                                </div>
                            </article>

                            <article id="faq" className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700">
                                <h3 className="text-2xl font-bold text-white mb-6">6. Frequently Asked Questions (FAQ)</h3>
                                <div className="space-y-4">
                                    <details className="group">
                                        <summary className="flex justify-between items-center cursor-pointer list-none text-indigo-300 font-medium">
                                            <span>Does Doodax store a copy of my files?</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <p className="text-gray-400 mt-3 group-open:animate-fadeIn">
                                            Never. Your files reside in your browser's memory and are cleared the moment you close the tab.
                                        </p>
                                    </details>
                                    <hr className="border-gray-700"/>
                                    <details className="group">
                                        <summary className="flex justify-between items-center cursor-pointer list-none text-indigo-300 font-medium">
                                            <span>Are there file size limits?</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <p className="text-gray-400 mt-3 group-open:animate-fadeIn">
                                            Limits depend on your device's RAM, not our servers. Most modern computers can handle PDFs up to 500MB easily within the browser.
                                        </p>
                                    </details>
                                    <hr className="border-gray-700"/>
                                    <details className="group">
                                        <summary className="flex justify-between items-center cursor-pointer list-none text-indigo-300 font-medium">
                                            <span>How can I contact the developer?</span>
                                            <span className="transition group-open:rotate-180">
                                                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                            </span>
                                        </summary>
                                        <p className="text-gray-400 mt-3 group-open:animate-fadeIn">
                                            You can reach HSINI MOHAMED at <a href="mailto:hsini.web@gmail.com" className="text-white underline">hsini.web@gmail.com</a>.
                                        </p>
                                    </details>
                                </div>
                            </article>
                        </div>
                    </div>

                    {/* Toggle Button */}
                    <div className="mt-8 text-center">
                         {/* Gradient Overlay for collapsed state */}
                         {!isExpanded && (
                            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none z-10"></div>
                        )}
                        
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="relative z-20 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-teal-600 hover:from-indigo-500 hover:to-teal-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl shadow-indigo-500/30"
                        >
                            {isExpanded ? (
                                <>
                                    <span>Read Less</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                                </>
                            ) : (
                                <>
                                    <span>Read Full SEO Article</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SeoArticle;
