import React from "react";
import pre1 from "../assets/pre1.jfif";
import pre2 from "../assets/pre2.jfif";
import pre3 from "../assets/pre3.jfif";
import pre4 from "../assets/pre4.jfif";
import pre5 from "../assets/pre5.jfif";
import pre6 from "../assets/pre6.jfif";
import pre7 from "../assets/pre7.png";
import pre8 from "../assets/pre8.jfif";
import copy from "../assets/copy.png";
const promptData = [
  {
    title: "DRAGON WORLD",
    img: pre1,
    par: "Amollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
  },
  {
    title: "FANTASY",
    img: pre2,
    par: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
  },
  {
    title: "DRAGON HOUSE",
    img: pre3,
    par: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl.",
  },
  {
    title: "PRINCESS",
    img: pre4,
    par: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu.",
  },
  {
    title: "SPACE TEAM",
    img: pre5,
    par: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet maximus augue.",
  },
  {
    title: "SEA CREATURE",
    img: pre6,
    par: "Pmied vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque.",
  },
  {
    title: "PIXEL GIRL",
    img: pre7,
    par: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim, sed ultricies nisl. Maecenas ullamcorper nunc metus, sed facilisis dolor cursus eu. Nam sit amet Nam maximus augue.",
  },
  {
    title: "SHADOW FIGHTER",
    img: pre8,
    par: "Sed vitae orci mollis, ultrices augue id, laoreet tellus. Sed vitae fermentum neque. Nunc sed tincidunt enim.",
  },
];

function PromptE() {
  return (
    <div className="max-w-[1320px] w-full  mx-auto py-10">
      <h1 className="text-[#2B2B2B]  text-center md:text-left font-[Apex_Mk2] text-[64px] font-normal leading-normal tracking-[2.56px] capitalize">
        PROMPT EXAMPLES
      </h1>
      <div className="max-w-[1320px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9 px-15my-8 lg:my-15">
        {promptData.map((prompt, index) => (
          <div
            key={index}
            className="max-w-[577px] lg:h-[262px] w-full h-auto overflow-hidden rounded-2xl shadow-lg p-[15px] bg-white flex flex-col lg:flex-row mx-auto gap-6 border-[2.8px] border-solid border-[#E7E7E7]"
          >
            <div className="w-full lg:w-[310px] h-[232px] relative">
              <img
                src={prompt.img}
                alt={prompt.title}
                className=" w-full h-full  rounded-[20px] object-cover border-3 border-[#E7E7E7]  "
              />

              <button className="w-[58px] h-[58px] rounded-full absolute left-1/2 -bottom-6 lg:top-1/2 lg:left-[100%]  bg-gradient-custom text-white transform -translate-x-1/2 lg:-translate-y-1/2 flex justify-center items-center border-3 border-[#FFF9F9]">
                <span className="text-white font-[Roboto] text-[12px] font-normal leading-normal tracking-[0.36px] opacity-75">
                  Copy
                </span>
                <img src={copy} alt="" className="w-[13.5px] h-[15px] ml-[2px] " />
              </button>
            </div>

            <div className="p-2 lg:w-[208px]  ">
              <h2 className="text-[#2B2B2B] font-apex text-[22px] font-normal leading-normal">
                {prompt.title}
              </h2>
              <p className="text-[#6B6B6B] font-roboto text-[14px] font-normal leading-normal">
                {prompt.par}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PromptE;
