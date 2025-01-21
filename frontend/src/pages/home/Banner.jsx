import React from 'react';
import bannerImg from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-12">
      <div className="md:w-1/2 w-full flex items-center md:justify-end">
        <img src={bannerImg} alt="" />
      </div>
      <div className="md:w-1/2 w-full">
        <h1 className="md:text-5xl text-2xl font-medium mb-7">New Releases This Week</h1>
        <p className="mb-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quia sint molestiae fuga nisi velit
          quasi in blanditiis consectetur earum iure reprehenderit nulla, aspernatur voluptas soluta, aperiam deleniti
          reiciendis laudantium possimus corporis. Incidunt, odio necessitatibus!
        </p>
        <button className="btn-primary">Subscribe</button>
      </div>
    </div>
  );
};

export default Banner;
