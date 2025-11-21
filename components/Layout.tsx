
import React, { useState, useCallback } from 'react';

// Define the structure for Modal content
interface ModalContent {
  title: string;
  body: React.ReactNode;
}

// Modal Component
const Modal: React.FC<{ content: ModalContent; onClose: () => void }> = ({ content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-gray-900/95 border border-indigo-500/30 text-white rounded-3xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-y-auto transform transition-all scale-100 flex flex-col relative" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur md:p-6 p-4 border-b border-gray-800 flex justify-between items-center z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400">
            {content.title}
          </h2>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-400 transition-all text-2xl leading-none"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 text-gray-300 leading-relaxed space-y-6 font-light text-lg">
          {content.body}
        </div>

        {/* Modal Footer (Optional decoration) */}
        <div className="h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 w-full"></div>
      </div>
    </div>
  );
};

// Enhanced Smoky/Nebula Background Component
const SmokyBackground: React.FC = () => (
  <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden bg-[#020204]">
    <style>{`
      @keyframes drift {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.1); }
        100% { transform: rotate(360deg) scale(1); }
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.7; }
      }
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
      }
      .nebula {
        position: absolute;
        filter: blur(80px);
        opacity: 0.4;
        animation: drift 60s infinite linear;
        mix-blend-mode: screen;
      }
      .nebula-1 {
        top: -20%;
        left: -20%;
        width: 70vw;
        height: 70vw;
        background: radial-gradient(circle, #4f46e5, transparent 70%);
        animation-duration: 55s;
      }
      .nebula-2 {
        bottom: -20%;
        right: -20%;
        width: 80vw;
        height: 80vw;
        background: radial-gradient(circle, #db2777, transparent 70%);
        animation-duration: 70s;
        animation-direction: reverse;
      }
      .nebula-3 {
        top: 40%;
        left: 40%;
        width: 60vw;
        height: 60vw;
        background: radial-gradient(circle, #0ea5e9, transparent 70%);
        animation-duration: 90s;
      }
      .stars {
        position: absolute;
        top: 0; left: 0; width: 100%; height: 100%;
        background-image: 
          radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
          radial-gradient(1px 1px at 50px 160px, #fff, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
          radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
        background-repeat: repeat;
        background-size: 200px 200px;
        opacity: 0.3;
        animation: twinkle 5s infinite ease-in-out alternate;
      }
      .vignette {
        position: absolute;
        width: 100%; height: 100%;
        background: radial-gradient(circle at center, transparent 0%, #000 120%);
      }
    `}</style>
    <div className="stars"></div>
    <div className="nebula nebula-1"></div>
    <div className="nebula nebula-2"></div>
    <div className="nebula nebula-3"></div>
    <div className="vignette"></div>
  </div>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = useCallback((modalId: string) => {
    setActiveModal(modalId);
  }, []);
  
  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  // Detailed Content for Google Policy compliance & User Info
  const modalContents: { [key: string]: ModalContent } = {
    about: { 
      title: "About Galaxy PDF Tool", 
      body: (
        <>
          <p><strong>Welcome to Galaxy PDF Tool</strong>, your secure, privacy-first solution for document management.</p>
          <p>
            In today's digital landscape, data privacy is not just a feature—it's a necessity. Galaxy PDF Tool was built on a revolutionary architecture that runs entirely in your browser. Unlike traditional online converters that require you to upload your sensitive contracts, financial records, or personal data to a remote server, our tool processes everything locally on your device.
          </p>
          <p>
            Hosted at <strong>doodax.com</strong>, our mission is to provide professional-grade PDF utilities (Merging, Splitting, Reordering) without compromising user security. We believe powerful tools should be accessible, free, and transparent.
          </p>
        </>
      )
    },
    contact: { 
      title: "Contact Us", 
      body: (
        <>
          <p className="mb-6">We are here to help! If you have any questions regarding our tools, privacy practices, or need technical support, please don't hesitate to reach out.</p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-teal-400 mb-3">Email Support</h3>
              <p className="text-sm text-gray-400 mb-2">Direct inquiries & DMCA:</p>
              <a href="mailto:hsini.web@gmail.com" className="text-xl text-white hover:text-indigo-400 font-semibold transition-colors">
                hsini.web@gmail.com
              </a>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-bold text-purple-400 mb-3">Official Website</h3>
              <p className="text-sm text-gray-400 mb-2">Visit us at:</p>
              <a href="https://doodax.com" target="_blank" rel="noreferrer" className="text-xl text-white hover:text-indigo-400 font-semibold transition-colors">
                doodax.com
              </a>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-500">
            We aim to respond to all valid inquiries within 24-48 hours.
          </p>
        </>
      )
    },
    guide: { 
      title: "User Guide", 
      body: (
        <div className="space-y-8">
          <section>
            <h3 className="text-xl font-bold text-indigo-400 mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3 text-indigo-300">1</span>
              Merging PDFs
            </h3>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Navigate to the <strong>"Merge PDF"</strong> tab.</li>
                <li>Drag and drop your PDF files into the designated area, or click to browse your device.</li>
                <li>Once uploaded, drag the file items in the list to <strong>reorder</strong> them.</li>
                <li>Click <strong>"Merge PDF Files Now"</strong> to process and download your single combined document.</li>
              </ol>
            </div>
          </section>
          
          <section>
            <h3 className="text-xl font-bold text-teal-400 mb-3 flex items-center">
              <span className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center mr-3 text-teal-300">2</span>
              Splitting PDFs
            </h3>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700/50">
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                <li>Switch to the <strong>"Split PDF"</strong> tab.</li>
                <li>Upload the single PDF you wish to divide.</li>
                <li>Choose your method:
                  <ul className="list-disc pl-5 mt-1 mb-1 text-gray-400">
                    <li><strong>Range:</strong> Enter page numbers (e.g., "1-5, 8").</li>
                    <li><strong>Extract All:</strong> Check the box to save every page as a separate file.</li>
                  </ul>
                </li>
                <li>Click <strong>"Download Split Files"</strong>.</li>
              </ol>
            </div>
          </section>
        </div>
      ) 
    },
    privacy: { 
      title: "Privacy Policy", 
      body: (
        <div className="space-y-4 text-sm md:text-base">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Effective Date: October 27, 2023</p>
          
          <h3 className="text-lg font-bold text-white mt-4">1. Overview</h3>
          <p>At <strong>doodax.com</strong>, we prioritize your privacy. This Privacy Policy explains how Galaxy PDF Tool handles your data. The short version: <strong>We do not see, store, or process your files on our servers.</strong></p>

          <h3 className="text-lg font-bold text-white mt-4">2. Local Processing</h3>
          <p>Our technology utilizes WebAssembly and HTML5 APIs to process files locally within your web browser. When you "upload" a file, it never leaves your computer/device. It is processed in your device's RAM and the result is saved back to your disk. No file transfer occurs over the internet.</p>

          <h3 className="text-lg font-bold text-white mt-4">3. Data Collection</h3>
          <p>We do not collect personal identification information (PII). We may use third-party analytics (e.g., Google Analytics) to collect anonymous usage data (page views, browser type, session duration) to improve website performance. This data cannot be used to identify you personally or access your files.</p>

          <h3 className="text-lg font-bold text-white mt-4">4. Cookies</h3>
          <p>We use essential cookies to ensure the website functions correctly. You may disable cookies in your browser settings, though this may impact site performance.</p>

          <h3 className="text-lg font-bold text-white mt-4">5. Contact</h3>
          <p>For privacy-related concerns, please contact <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 underline">hsini.web@gmail.com</a>.</p>
        </div>
      ) 
    },
    terms: { 
      title: "Terms of Service", 
      body: (
        <div className="space-y-4 text-sm md:text-base">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-2">Last Updated: October 27, 2023</p>

          <h3 className="text-lg font-bold text-white mt-4">1. Acceptance</h3>
          <p>By accessing <strong>doodax.com</strong>, you agree to these Terms of Service. If you do not agree, please do not use our services.</p>

          <h3 className="text-lg font-bold text-white mt-4">2. Usage</h3>
          <p>You are granted a limited, non-exclusive license to use the Galaxy PDF Tool for personal or commercial document processing. You may not attempt to reverse engineer the source code or use the tool for illegal activities.</p>

          <h3 className="text-lg font-bold text-white mt-4">3. Disclaimer</h3>
          <p>The service is provided "AS IS". <strong>doodax.com</strong> makes no warranties regarding the accuracy, reliability, or availability of the service. We are not responsible for any data loss that may occur during local processing on your device.</p>

          <h3 className="text-lg font-bold text-white mt-4">4. Governing Law</h3>
          <p>These terms are governed by the laws applicable to the website owner's jurisdiction.</p>
        </div>
      ) 
    },
    dmca: { 
      title: "DMCA Policy", 
      body: (
        <>
          <p className="mb-4"><strong>Galaxy PDF Tool (doodax.com)</strong> respects the intellectual property rights of others.</p>
          <p className="mb-4">Because our service operates entirely client-side, we do not host user-generated content. We cannot "take down" a PDF file because we never possessed it in the first place.</p>
          <p className="mb-4">However, if you believe any content <em>on the website interface itself</em> (text, images, branding) infringes your copyright, please send a notice to our Designated Agent at:</p>
          
          <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500 my-6">
            <p className="font-bold text-white">DMCA Agent</p>
            <p>Email: <a href="mailto:hsini.web@gmail.com" className="text-indigo-400 hover:underline">hsini.web@gmail.com</a></p>
          </div>

          <p>Your notice must include:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-400">
            <li>A physical or electronic signature of the copyright owner.</li>
            <li>Identification of the copyrighted work claimed to be infringed.</li>
            <li>Description of where the material is located on our site.</li>
            <li>Your contact information (Address, Phone, Email).</li>
            <li>A statement of good faith belief.</li>
          </ul>
        </>
      ) 
    },
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'guide', label: 'Guide' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms', label: 'Terms' },
    { id: 'dmca', label: 'DMCA' },
  ];

  return (
    <div className="min-h-screen bg-transparent text-white font-sans flex flex-col relative selection:bg-indigo-500 selection:text-white">
      <SmokyBackground />

      <header className="py-5 px-4 sm:px-6 md:px-8 bg-black/10 backdrop-blur-md border-b border-white/5 sticky top-0 z-40 transition-all duration-300">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center border border-white/10">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
              Doodax<span className="text-indigo-400">.com</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-sm">
            {navLinks.map(link => (
              <li key={link.id}>
                <button 
                  onClick={() => openModal(link.id)} 
                  className="text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

           {/* Mobile Menu Button */}
           <button className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10" onClick={() => openModal(navLinks.map(l => l.id).join(','))}>
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </button>
        </nav>
      </header>

      {/* Mobile Menu Modal */}
      {activeModal && activeModal.includes(',') && (
         <Modal content={{title: "Menu", body: 
         <ul className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <li key={link.id}>
                <button onClick={() => openModal(link.id)} className="w-full text-left p-4 rounded-xl hover:bg-indigo-500/20 text-xl font-medium transition-colors duration-200 flex justify-between items-center border border-transparent hover:border-indigo-500/30">
                  {link.label}
                  <span className="text-indigo-400">&rarr;</span>
                </button>
              </li>
            ))}
          </ul>
         }} onClose={closeModal} />
      )}

      {/* Content Modal */}
      {activeModal && !activeModal.includes(',') && modalContents[activeModal] && (
        <Modal content={modalContents[activeModal]} onClose={closeModal} />
      )}

      <div className="flex-grow flex flex-col relative z-10">
        {children}
      </div>

      <footer className="py-10 px-4 sm:px-6 bg-black/40 backdrop-blur-xl border-t border-white/5 mt-auto">
        <div className="container mx-auto flex flex-col items-center text-center space-y-6">
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
             {navLinks.map(link => (
                <button key={link.id} onClick={() => openModal(link.id)} className="hover:text-white hover:underline underline-offset-4 decoration-indigo-500">
                  {link.label}
                </button>
             ))}
          </div>

          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          <div className="flex flex-col items-center">
            <p className="text-gray-500 text-sm mb-2">&copy; {new Date().getFullYear()} doodax.com. All rights reserved.</p>
            
            <p className="text-base font-medium text-gray-300">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 hover:underline decoration-2 underline-offset-2 font-bold transition-all">HSINI MOHAMED</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
