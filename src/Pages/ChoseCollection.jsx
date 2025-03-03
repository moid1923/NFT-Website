import React, { useState } from 'react';
import chc1 from '../assets/chc1.jfif';
import chc2 from '../assets/chc2.jfif';
import chc3 from '../assets/chc3.jfif';
import chc4 from '../assets/chc4.jfif';

const collections = [
  { id: 1, image: chc1, title: 'Wonderful Artwork', items: '1.5k' },
  { id: 2, image: chc2, title: 'Wonderful Artwork', items: '1.5k' },
  { id: 3, image: chc3, title: 'Wonderful Artwork', items: '1.5k' },
  { id: 4, image: chc4, title: 'Wonderful Artwork', items: '1.5k' }
];

function ChoseCollection() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (id) => {
    setSelected(id);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F7F7F7]">
      <div className="bg-white shadow-lg rounded-[20px] p-8 w-[850px]">
        <h2 className="text-center text-[#2B2B2B] text-[32px] font-apex font-[400] tracking-[1.6px] mb-10 capitalize">CHOOSE COLLECTION</h2>
        <div className="space-y-6">
          {collections.map((collection) => (
            <div key={collection.id} className={`flex justify-between items-center p-4 rounded-lg border border-[#D9D9D9] transition ${selected === collection.id ? 'bg-[#FFE9E9]' : 'bg-white'}`}>
              <div className="flex items-center space-x-4">
                <img src={collection.image} alt={collection.title} className="w-[60px] h-[60px] rounded-full object-cover" />
                <div>
                  <h3 className="text-[#2B2B2B] text-lg font-medium font-roboto capitalize">{collection.title}</h3>
                  <p className="text-[#808080] text-sm font-roboto">Items {collection.items}</p>
                </div>
              </div>
              <button
                onClick={() => handleSelect(collection.id)}
                className={`border border-[#D9D9D9] px-6 py-2 rounded-lg transition text-center text-lg font-medium font-roboto capitalize ${selected === collection.id ? 'bg-red-500 text-white' : 'hover:bg-red-500 hover:text-white text-[#2b2b2b]'}`}
              >
                Select
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-3 rounded-lg shadow-md hover:opacity-90 transition text-lg font-roboto capitalize">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChoseCollection;
