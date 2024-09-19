
import React, { useEffect, useState, useRef } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

function Category() {
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);
  const itemWidth = 100 + 10; // Width of the item plus margin (150 + 60px).

  // Function to fetch categories from JSON
  const fetchCategories = async () => {
    try {
      const response = await fetch('/data.json');
      const data = await response.json();
      setCategories(data);   

    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -itemWidth * 2, // Scroll left by 3 items
        behavior: 'smooth',
      });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: itemWidth * 2, // Scroll right by 3 items
        behavior: 'smooth',
      });
    }
  };

  // CSS to hide the scrollbar
  const noScrollbarStyle = {
    overflowX: 'auto',
    scrollbarWidth: 'none', /* For Firefox 
    msOverflowStyle: 'none', /* For IE and Edge */
  };

  return (
    <div>
      {/* Section for "What's on your mind" text */}
      <div className="relative max-w-[1280px] mt-2 mx-auto p-3">
        <div className="text-left w-full ">
          <h2 className="text-2xl font-semibold">What's on your mind ?</h2>
        </div>
      </div>

      {/* Category Slider with Scroll Buttons */}
      <div className="relative max-w-[1380px] mx-auto p-3 flex items-center">
        <div 
          className="flex"
          ref={scrollRef}
          style={{ ...noScrollbarStyle, scrollBehavior: 'smooth', width: '1300px' }}
        >
          {categories.map((category, index) => (
            <div key={index} className="flex-none w-[150px] mr-4">
              <img
                src={`/images/${category.image}`}
                alt={category.path}
                className="w-full h-auto object-cover"
              />
              <hr className='my-4 border-[1px]'></hr>
            </div>
          ))}
        </div>
        {/* Scroll Buttons */}
        <div className="flex flex-col space-y-2 ml-4">
          <button
            onClick={scrollLeft}
            className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          >
            <FaArrowAltCircleLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 bg-orange-500 rounded-full text-white hover:bg-orange-600"
          >
            <FaArrowAltCircleRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
