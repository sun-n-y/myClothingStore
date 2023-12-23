import { Link } from 'react-router-dom';

import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      {/* HERO INFO */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight">
          Changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          voluptas, itaque illo vitae optio consequatur ducimus inventore
          doloremque molestiae excepturi. Ipsa vel error nam expedita distinctio
          veniam exercitationem aut incidunt!
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      {/* HERO CAROUSEL */}
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div className="carousel-item" key={image}>
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
