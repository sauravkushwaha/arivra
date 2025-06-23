import React, { useState } from 'react';

const QuestionCard = ({ question, answer, codeSnippets }) => {
  const [open, setOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="border rounded-xl shadow-sm mb-4 bg-white text-black">
      <div onClick={() => setOpen(!open)} className="px-4 py-3 cursor-pointer font-semibold">
        {question}
      </div>
      {open && (
        <div className="px-4 pb-4">
          <p className="mb-2">{answer}</p>
          {codeSnippets?.map((code, index) => (
            <div key={index} className="relative bg-gray-100 p-2 mb-2 rounded">
              <pre className="text-sm">{code}</pre>
              <button
                onClick={() => handleCopy(code, index)}
                className="absolute top-1 right-1 px-2 py-1 bg-blue-500 text-white rounded text-xs"
              >
                {copiedIndex === index ? 'Copied!' : 'Copy'}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;