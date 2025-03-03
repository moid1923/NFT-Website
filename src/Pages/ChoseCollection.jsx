import React, { useState } from 'react';
import chc1 from '../assets/chc1.jfif';
import chc2 from '../assets/chc2.jfif';
import chc3 from '../assets/chc3.jfif';
import chc4 from '../assets/chc4.jfif';

const collections = [
  { id: 1, title: 'Wonderful Artwork', items: '1.5k', img: chc1 },
  { id: 2, title: 'Wonderful Artwork', items: '1.5k', img: chc2 },
  { id: 3, title: 'Wonderful Artwork', items: '1.5k', img: chc3 },
  { id: 4, title: 'Wonderful Artwork', items: '1.5k', img: chc4 },
];

function ChoseCollection() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    
    <div>
      <div className='flex items-center justify-center max-w-[1320px]'>
      <div>
        <button className='bg-white p-[10px] text-[18px]'>Back</button>
        </div>
        <div className="w-full max-w-[1164px]  flex justify-center items-center min-h-screen bg-[#FFF7F7] px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-[900px] w-full">
          <h2 className="text-center text-[64px] font-apex font-bold mb-8 text-[#2B2B2B]">
            CHOOSE COLLECTION
          </h2>
          <div className="space-y-6">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className={`flex items-center justify-between p-4 border border-[#D9D9D9] rounded-lg transition cursor-pointer ${
                  selected === collection.id ? 'bg-[#FFF0F0] shadow-md' : 'bg-white'
                }`}
                onClick={() => handleSelect(collection.id)}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={collection.img}
                    alt={collection.title}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-[#2B2B2B] font-roboto font-medium text-lg capitalize">
                      {collection.title}
                    </h3>
                    <p className="text-[#808080] text-sm">Items {collection.items}</p>
                  </div>
                </div>
                <button
                  className={`border border-[#D9D9D9] px-6 py-2 rounded-lg transition font-roboto capitalize text-lg ${
                    selected === collection.id
                      ? 'bg-red-500 text-white border-red-500'
                      : 'text-[#2B2B2B] hover:bg-red-500 hover:text-white'
                  }`}
                >
                  Select
                </button>
              </div>
            ))}
          </div>
  
          <div className="mt-10 text-right">
            <button
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition text-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ChoseCollection;
