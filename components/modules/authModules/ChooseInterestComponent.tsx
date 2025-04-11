'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
// import { useGetListOfInterests } from '@/services/useUserAuthService';

const interestList = [
    "Comedy",
    "Entertainment & Culture",
    "Music",
    "Food & Drink",
    "Designs",
    "Tech Development",
    "Fashion & Lifestyle",
    "Literature & History",
    "Travel",
    "Sports",
    "Life Hacks",
    "Anime & Comics",
    "Family",
    "Auto Vehicle",
    "Science & Education"
]

// type InterestsSelectorProps = {
//     interestList: string[];
//   };

const ChooseInterestComponent = () => {

    // const {data: interest} = useGetListOfInterests()
   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleSelect = (item: string) => {
    setSelectedInterests((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item) // Remove if already selected
        : [...prev, item]                // Add if not selected
    );
  };
  
    return (
        <div className='flex flex-col w-full max-w-[430px] gap-[32px]'>
            <div className='w-full flex flex-wrap gap-[12px]'>
                {interestList.map((item, index) => {
                    const isSelected = selectedInterests.includes(item);

                    return (
                        <Button
                            type='button'
                            key={index}
                            onClick={() => handleSelect(item)}
                            className={`py-[6px] px-[16px] rounded-full text-sm font-semibold cursor-pointer 
              ${isSelected
                                    ? 'bg-[#6A88D1] text-[#F9FAFB] border-none'
                                    : 'bg-white text-[#111827] border border-[#D1D5DB] hover:bg-[#6A88D1] hover:text-[#F9FAFB] hover:border-none'
                                }`}
                        >
                            {item}
                        </Button>
                    );
                })}

            </div>
            <div className='w-full flex flex-col lg:flex-row items-center justify-between gap-[20px]'>
                <Button type='button' className='bg-[#F3F4F6] text-base font-semibold text-[#6A88D1] py-[14px] px-[24px] rounded-[12px] cursor-pointer w-full lg:w-1/2 h-[52px]'>Skip</Button>
                <Button type='submit' className='bg-[#6A88D1] text-base font-semibold text-[#FFFFFF] py-[14px] px-[24px] rounded-[12px] cursor-pointer w-full lg:w-1/2 h-[52px]'>Next</Button>
            </div>
        </div>
    );
}

export default ChooseInterestComponent;
