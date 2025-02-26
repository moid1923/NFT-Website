import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
// Optionally, you can import the default styles and then override them
// import 'react-accessible-accordion/dist/fancy-example.css';

function FAQSection() {
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
    <div className=" py-16 px-6 sm:px-12 lg:my-10">
      <div className="max-w-[1320px] w-full mx-auto">
        <h2 className="text-center md:text-[64px] sm:text-[45px] text-[20px]  font-bold text-gray-900 mb-4 md:mb-8 font-apex  leading-[76px] tracking-[3%] ">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <Accordion allowZeroExpanded preExpanded={[0]}>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              uuid={index}
              className="border  border-gray-300 rounded-2xl p-2  my-3 "
            >
              <AccordionItemHeading>
                <AccordionItemState>
                  {({ expanded }) => (
                   <AccordionItemButton
                   className={`w-full text-left px-6 py-4 text-[16px] md:text-[22px] font-[600] focus:outline-none flex gap-x-3 items-center relative font-roboto ${
                     expanded
                       ? 'bg-[#ffe0e0] border border-gray-300 rounded-2xl '
                       : ' '
                   }`}
                 >
                 
                      <span
                        className={`transition-transform duration-300 text-[32px] font-bold md:mr-6  ${
                          expanded ? 'rotate-180 text-red-500' : ''
                        }`}
                      >
                        {expanded ? '− ' : '+'}
                      </span>
                      <span
                        className={`font-semibold text-[#2B2B2B]  ${
                          expanded ? 'text-[#2B2B2B]' : ''
                        }`}
                      >
                        {faq.question}
                      </span>
                    </AccordionItemButton>
                  )}
                </AccordionItemState>
              </AccordionItemHeading>
              <AccordionItemPanel className="font-roboto px-6 md:ps-20 py-4 text-[#808080] font-[400] text-sm sm:text-base bg-white-50 rounded-b-lg text-[14px] md:text-[18px]">
                {faq.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQSection;
