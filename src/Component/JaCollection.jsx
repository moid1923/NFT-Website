import React from 'react';
import col1 from '../assets/col1.jfif';
import col2 from '../assets/col2.jfif';
import col3 from '../assets/col3.jfif';
import col4 from '../assets/col4.jfif';
import col5 from '../assets/col5.jfif';
import col6 from '../assets/col6.jfif';
import col7 from '../assets/col7.jfif';
import col8 from '../assets/col8.jfif';
import col9 from '../assets/col9.jfif';
import col10 from '../assets/c0l10.png';
import ar from '../assets/ar.png'
import { useNavigate } from 'react-router-dom';
function JaCollection({ cards = [], title = "Collection", showtitle = true, showlink = false , navigateTo = ('/aiart') }) {
  const collections = cards.length > 0 ? cards : [
    { id: 1, image: col1 },
    { id: 2, image: col2 },
    { id: 3, image: col3 },
    { id: 4, image: col4 },
    { id: 5, image: col5 },
    { id: 6, image: col6 },
    { id: 7, image: col7 },
    { id: 8, image: col8 },
    { id: 9, image: col9 },
    { id: 10, image: col10 },
  ];
  const navigate = useNavigate();
  const handleArtPage = () => {
    navigate(navigateTo);
  };

  return (
    <div className=" min-h-screen max-w-[1320px] w-full mx-auto my-[80px] lg:my-[155px]">
      {showtitle && (
        <h1 className="text-4xl font-bold mb-8 text-[#2B2B2B] md:text-[50px] lg:text-[64px] leading-[76px] font-apex text-center lg:text-left">{title}</h1>
      )}
      {showlink &&(
        <div className='flex items-center justify-between max-w-[1320px] w-full p-5'>
          <div className="btn1 w-[140px] h-[49px] py-3.5 rounded-lg border-2 border-[#fd0000] justify-center items-center gap-2.5 inline-flex text-center text-[#fe0101] text-lg font-normal font-roboto capitalize">Collection</div>
          <div className="btn1 w-[142px] h-[49px] py-3.5 rounded-lg border-2 border-[#fd0000]  justify-center  items-center gap-2.5 inline-flex text-center text-[#fe0101] text-lg font-normal font-roboto capitalize"
          onClick={handleArtPage}
          >Newest
            <img src={ar} alt="" className='w-[21px] h-[21px]' />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  max-w-[1320px] w-full mx-auto ">
        {collections.map((item) => (
          <div key={item.id} className="max-w-[417px] w-full h-[285px] mx-auto bg-[#fff9f9] rounded-2xl shadow-lg overflow-hidden p-4 flex flex-col justify-center gap-5">
            <div className="">
              <h2 className="text-lg font-bold text-[#2B2B2B] font-roboto leading-[21px]">WONDERFUL ARTWORK</h2>
              <p className=" text-sm text-[#8B8B8B]">Items <span className='text-[#2B2B2B] font-roboto font-bold '>1.5k</span> </p>
            </div>
            <div className='flex items-center justify-center'>
              <div className='max-w-[364px] w-full h-[193px] bg-[#FFF9F9] rounded-[15px] flex justify-center items-center' style={{ border: "2px solid #DBDBDB" }}>
                <div className='mx-auto relative max-w-[375px] w-full h-[187px] bg-[#FFF9F9] rounded-[15px] flex justify-center items-center mb-[6px]' style={{ border: "2px solid #DBDBDB" }}>
                  <div className=' absolute bottom-1.5 w-[387px]  h-[181px] flex items-center justify-center shrink-0 rounded-[15px]'>
                    <img src={item.image} alt="Artwork" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JaCollection;
