
import React, { useState, useEffect, useRef } from 'react';
import Card from './Card'; 

function Rest() {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);
  // Function to fetch categories from JSON
  const fetchRest = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching Data:', error);
    }
  };

  useEffect(() => {
    fetchRest();
  }, []);


  return (
    <div className="relative max-w-[1380px] mx-auto p-[10px] flex items-center ">
     
      <div className="text-left w-full mb-4">

        <h2 className="text-2xl font-semibold">Top Restaurant Near You</h2>

         <div className="flex mt-6 items-center overflow-hidden">

          <div className='flex'></div>

          <Card />

         </div>
      </div>
      
    </div>
    
  );
  
}

export default Rest





