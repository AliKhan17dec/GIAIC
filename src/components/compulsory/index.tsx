import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import programmingFundamental from '../../../public/programming_fundamentals.jpg';
import nextjsCourse from '../../../public/nextjs.jpg';
import earnAsYouLearn from '../../../public/earn_as_you_learn.jpg';

const Compulsory = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
        Core Courses Sequence
      </h1>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 mt-10">
        <Link href="/compulsory/1" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Programming Fundamentals"
              src={programmingFundamental}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Programming Fundamentals</span>
            </div>
          </div>
        </Link>

        <Link href="/compulsory/2" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Web2 using Next.js"
              src={nextjsCourse}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Web2 using Next.js</span>
            </div>
          </div>
        </Link>

        <Link href="/compulsory/3" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Earn as You Learn"
              src={earnAsYouLearn}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Earn as You Learn</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Compulsory;
