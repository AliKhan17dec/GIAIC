import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ai from '../../../public/AI.jpg';
import metaverse from '../../../public/metaverse.jpg';
import cloud from '../../../public/cloudComputing.jpg';
import iot from '../../../public/iot.jpg';
import genomics from '../../../public/genomics.jpg';
import automation from '../../../public/automation.jpg';

const AdvanceCourses = () => {
  return (
    <div className="xl:w-[1300px] lg:w-[90%] w-[95%] m-auto mb-10">
      <h1 className="lg:text-4xl sm:text-4xl text-2xl sm:text-left text-center text-main font-extrabold mt-10">
        Advanced Courses
      </h1>

      <div className="grid xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 mt-10">
        <Link href="/tracks/1" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Programming Fundamentals"
              src={ai}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Artifical Intelligence</span>
            </div>
          </div>
        </Link>

        <Link href="/tracks/2" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Web2 using Next.js"
              src={metaverse}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Web3 and Metaverse</span>
            </div>
          </div>
        </Link>

        <Link href="/tracks/3" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Earn as You Learn"
              src={cloud}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Cloud Native Computing</span>
            </div>
          </div>
        </Link>

        <Link href="/tracks/4" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Earn as You Learn"
              src={iot}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Ambient Computing and IoT</span>
            </div>
          </div>
        </Link>

        <Link href="/tracks/5" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Earn as You Learn"
              src={genomics}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Genomics and Bioinformics</span>
            </div>
          </div>
        </Link>

        <Link href="/tracks/6" className="hover:scale-105 duration-200 transition-all">
          <div className="overflow-hidden h-fit box_shadow rounded-lg flex flex-col justify-center items-center text-zinc-600 text-lg font-bold">
            <Image
              alt="Earn as You Learn"
              src={automation}
              className="object-cover w-full"
              height={300}
            />
            <div className="px-4 flex justify-center items-center h-[70px]">
              <span>Network Programmability and Automation</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdvanceCourses;

