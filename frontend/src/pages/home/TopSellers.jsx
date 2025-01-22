import { useState, useEffect } from 'react';
import BookCard from '../books/BookCard';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/books/book.Api';

const categories = ['Choose a genre', 'Business', 'Fiction', 'Horror', 'Adventure'];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState('Choose a genre');

  const { data: books = [] } = useFetchAllBooksQuery();

  const filteredBooks =
    selectedCategory === 'Choose a genre'
      ? books
      : books.filter(book => book.category === selectedCategory.toLowerCase());

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* Category filter */}
      <div className="mb-8 flex items-center">
        <select
          onChange={e => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus: outline-none"
        >
          {categories.map((category, i) => (
            <option key={i} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {/* Book listings */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 40 },
          1024: { slidesPerView: 2, spaceBetween: 50 },
          1180: { slidesPerView: 3, spaceBetween: 50 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((book, i) => (
            <SwiperSlide key={i}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TopSellers;
