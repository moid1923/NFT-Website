import React, { useState } from 'react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is an NFT?',
      answer:
        'An NFT (Non-Fungible Token) is a unique digital asset that represents ownership or proof of authenticity of a specific item or piece of content, often associated with digital art, collectibles, or virtual goods, and is stored on a blockchain.',
    },
    {
      question: 'How do I buy an NFT?',
      answer:
        'To buy an NFT, you need a digital wallet and cryptocurrency like Ethereum. Then, you can visit an NFT marketplace, connect your wallet, and purchase an NFT of your choice.',
    },
    {
      question: 'How do I sell an NFT?',
      answer:
        'To sell an NFT, you need to list it on an NFT marketplace. Connect your wallet, upload your NFT, set a price, and complete the listing process.',
    },
    {
      question: 'What cryptocurrencies do you accept?',
      answer:
        'Most NFT marketplaces accept cryptocurrencies like Ethereum (ETH), but some platforms may also accept other currencies like Binance Coin (BNB) or Polygon (MATIC).',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white to-red-50 py-16 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="bg-white rounded-lg shadow-lg ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-500 last:border-b-0 px-2 py-2">
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full text-left px-6 py-4 focus:outline-none flex gap-x-3  items-center ${
                  activeIndex === index ? 'bg-red-50 border border-gray-50 rounded-2xl' : 'hover:bg-gray-50'
                }`}
              >
                
                <span
                  className={`transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-red-500' : ''
                  }`}
                >
                  {activeIndex === index ? '−' : '+'}
                </span>
                <span
                  className={`font-semibold text-gray-900 ${
                    activeIndex === index ? 'text-red-500 ' : ''
                  }`}
                >
                  {faq.question}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-700 text-sm sm:text-base bg-white-50 rounded-b-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
