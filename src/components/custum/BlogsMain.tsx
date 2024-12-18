import React from 'react';
import { Cuisines } from '../../data/data';
import Link from 'next/link';
import Image from 'next/image';

const BlogsMain = () => {
  return (
    <div className="px-6 lg:px-8 py-12 sm:w-[86%] w-[91%] mx-auto bg-lightTan/65">
      <h2 className="text-3xl font-bold text-center text-darkBrown mb-8">
        Explore Blogs For Different Cuisines
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Cuisines.map((cuisine) => (
          <div
            key={cuisine.id}
            className="bg-ivory rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-mutedOlive hover:scale-105"
          >
            <Link href={`/blogs/${cuisine.id}`}>
              <div className="block p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    alt={cuisine.name}
                    src={cuisine.image || '/default-image.jpg'}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-darkBrown truncate">
                  {cuisine.name}
                </h3>
                <p className="text-sm text-mutedOlive mt-2 line-clamp-3">
                  {cuisine.description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsMain;
