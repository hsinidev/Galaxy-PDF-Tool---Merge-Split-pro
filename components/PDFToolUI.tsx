
import React, { useState, useCallback, useRef } from 'react';
import { simulateDownload } from '../lib/PDFUtils';

type ToolMode = 'merge' | 'split';

interface MergeFile extends File {
  id: number;
}

const PDFToolUI: React.FC = () => {
  const [mode, setMode] = useState<ToolMode>('merge');
  const [mergeFiles, setMergeFiles] = useState<MergeFile[]>([]);
  const [splitFile, setSplitFile] = useState<File | null>(null);
  const [splitRange, setSplitRange] = useState('');
  const [splitPerPage, setSplitPerPage] = useState(false);
  const [feedback, setFeedback] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const showFeedback = (message: string, type: 'success' | 'error') => {
    setFeedback({ message, type });
    setTimeout(() => setFeedback(null), 3000);
  };

  const handleMergeFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
        .filter((file: File) => file.type === 'application/pdf')
        .map((file, index) => Object.assign(file, { id: Date.now() + index }));

      if (newFiles.length !== e.target.files.length) {
        showFeedback('Only PDF files are accepted.', 'error');
      }
      setMergeFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleSplitFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      if (e.target.files[0].type === 'application/pdf') {
        setSplitFile(e.target.files[0]);
      } else {
        showFeedback('Only PDF files are accepted.', 'error');
        setSplitFile(null);
      }
    }
  };

  const removeMergeFile = (id: number) => {
    setMergeFiles(prev => prev.filter(file => file.id !== id));
  };
  
  const handleDragSort = () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    let _mergeFiles = [...mergeFiles];
    const draggedItemContent = _mergeFiles.splice(dragItem.current, 1)[0];
    _mergeFiles.splice(dragOverItem.current, 0, draggedItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setMergeFiles(_mergeFiles);
  };
  
  const handleMerge = () => {
    if (mergeFiles.length < 2) {
      showFeedback('Please select at least two PDF files to merge.', 'error');
      return;
    }
    showFeedback('Merging PDFs...', 'success');
    simulateDownload('merged_document.pdf', 'Simulated merged PDF content.');
  };
  
  const handleSplit = () => {
    if (!splitFile) {
      showFeedback('Please select a PDF file to split.', 'error');
      return;
    }
    if (!splitRange && !splitPerPage) {
      showFeedback('Please provide a page range or select the "split per page" option.', 'error');
      return;
    }
    showFeedback('Splitting PDF...', 'success');
    simulateDownload('split_files.zip', 'Simulated ZIP of split PDF pages.');
  };

  const TabButton: React.FC<{ active: boolean, onClick: () => void, children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className={`flex-1 px-6 py-4 text-lg font-bold tracking-wide transition-all duration-300 focus:outline-none ${
        active
          ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white shadow-inner border-b-2 border-indigo-400'
          : 'bg-transparent text-gray-400 hover:bg-white/5 hover:text-gray-200'
      }`}
    >
      {children}
    </button>
  );

  return (
    <section id="pdf-tool" className="max-w-4xl mx-auto bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/50 overflow-hidden border border-white/10">
      <div className="flex border-b border-white/5 bg-black/20">
        <TabButton active={mode === 'merge'} onClick={() => setMode('merge')}>Merge PDF</TabButton>
        <TabButton active={mode === 'split'} onClick={() => setMode('split')}>Split PDF</TabButton>
      </div>

      <div className="p-6 md:p-12 min-h-[450px] flex flex-col justify-center relative">
        {mode === 'merge' ? (
          <div className="animate-fade-in space-y-8">
            <div 
                className="border-2 border-dashed border-gray-500/50 rounded-2xl p-12 text-center cursor-pointer hover:border-indigo-400 hover:bg-indigo-500/10 transition-all duration-300 group" 
                onClick={() => fileInputRef.current?.click()}
            >
              <input type="file" multiple accept="application/pdf" className="hidden" ref={fileInputRef} onChange={handleMergeFileSelect} />
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
              </div>
              <p className="text-2xl font-semibold text-white mb-2">Drop PDFs here</p>
              <p className="text-gray-400">or click to browse your secure files</p>
            </div>
            
            {mergeFiles.length > 0 && (
              <ul className="space-y-3 mb-8 max-h-60 overflow-y-auto pr-2 scrollbar-thin">
                {mergeFiles.map((file, index) => (
                  <li 
                    key={file.id}
                    className="flex items-center justify-between bg-gray-800/60 border border-gray-700/50 p-4 rounded-xl cursor-grab active:cursor-grabbing transition-all hover:bg-gray-700/60 hover:border-indigo-500/30 group"
                    draggable
                    onDragStart={() => dragItem.current = index}
                    onDragEnter={() => dragOverItem.current = index}
                    onDragEnd={handleDragSort}
                    onDragOver={(e) => e.preventDefault()}
                  >
                    <div className="flex items-center overflow-hidden">
                        <span className="text-gray-600 mr-4 select-none group-hover:text-indigo-400 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </span>
                        <span className="text-gray-200 truncate font-medium text-lg">{file.name}</span>
                    </div>
                    <button onClick={() => removeMergeFile(file.id)} className="ml-4 text-gray-500 hover:text-red-400 transition-colors p-2 rounded-full hover:bg-red-400/10">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <button onClick={handleMerge} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-300 text-xl shadow-xl shadow-indigo-900/20 transform hover:-translate-y-1">
              Merge PDF Files Now
            </button>
          </div>
        ) : (
          <div className="animate-fade-in space-y-8">
            <div 
                className="border-2 border-dashed border-gray-500/50 rounded-2xl p-12 text-center cursor-pointer hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-300 group" 
                onClick={() => fileInputRef.current?.click()}
            >
              <input type="file" accept="application/pdf" className="hidden" ref={fileInputRef} onChange={handleSplitFileSelect} />
              {splitFile ? (
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 mb-4 bg-teal-500/20 rounded-2xl flex items-center justify-center border border-teal-500/30">
                        <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <p className="text-2xl font-semibold text-teal-300">{splitFile.name}</p>
                    <p className="text-base text-gray-400 mt-1">{(splitFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              ) : (
                <>
                   <div className="w-20 h-20 mx-auto mb-6 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" /></svg>
                   </div>
                  <p className="text-2xl font-semibold text-white mb-2">Drop PDF to Split</p>
                  <p className="text-gray-400">Extract pages with precision</p>
                </>
              )}
            </div>
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-base font-medium text-gray-300 mb-3 ml-1">Page Range (Optional)</label>
                <input 
                    type="text"
                    placeholder="e.g., 1-5, 8, 11-13"
                    value={splitRange}
                    onChange={(e) => setSplitRange(e.target.value)}
                    disabled={splitPerPage}
                    className="w-full bg-black/20 border border-gray-600 rounded-2xl px-6 py-5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed text-lg"
                />
              </div>
              <label className="flex items-center p-5 rounded-2xl border border-gray-700/50 bg-gray-800/30 cursor-pointer hover:bg-gray-800/50 transition-colors group">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox"
                    checked={splitPerPage}
                    onChange={(e) => setSplitPerPage(e.target.checked)}
                    className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-gray-500 bg-gray-700 transition-all checked:border-teal-500 checked:bg-teal-500 hover:border-teal-400"
                  />
                   <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none opacity-0 peer-checked:opacity-100 text-white transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="ml-4 text-gray-300 select-none text-lg group-hover:text-white transition-colors">Extract every page into a separate file</span>
              </label>
            </div>
            <button onClick={handleSplit} className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-5 px-6 rounded-2xl transition-all duration-300 text-xl shadow-xl shadow-teal-900/20 transform hover:-translate-y-1">
              Download Split Files
            </button>
          </div>
        )}
      </div>
      {feedback && (
        <div className={`p-4 text-center font-medium animate-fade-in absolute top-0 left-0 w-full z-50 ${feedback.type === 'success' ? 'bg-green-500/90 text-white' : 'bg-red-500/90 text-white'}`}>
          {feedback.message}
        </div>
      )}
    </section>
  );
};

export default PDFToolUI;
