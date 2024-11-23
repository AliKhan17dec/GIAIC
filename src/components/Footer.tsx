import React from 'react'
import Link from 'next/link'
import { CompulsoryData } from '@/data/main/compulsory'
import { tracks } from '@/data/main/tracks'
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-100 py-8 px-10 text-gray-800 flex justify-around'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h3 className='text-xl font-bold mb-4 '>Core Courses</h3>
                {CompulsoryData.map((val) => (
                      <Link href={`/compulsory/${val.id}`} key={val.id}>
                        <div className='py-1 px-2 text-sm text-black hover:text-main'>{val.text}</div>
                      </Link>
                      
                    ))}

            </div>
            <div>
                <h3 className='text-xl font-bold mb-4 '>Advance Courses</h3>
                {tracks.map((val) => (
                      <Link href={`/tracks/4${val.id}`} key={val.id}>
                        <div className='py-1 px-2 text-sm text-black hover:text-main'>{val.name}</div>
                      </Link>
                      
                    ))}

            </div>
            <div>
                <h3 className='text-xl font-bold mb-4 '>Social Links</h3>
                <div className='flex space-x-4 mb-4'>
                     <Link href="#"><FaFacebook className='w-8 h-8 text-blue-700'/></Link>
                     <Link href="#"><FaYoutube className='w-8 h-8 text-red-600'/></Link>
                     <Link href="#"><FaTwitter className='w-8 h-8 text-sky-500'/></Link>
                     <Link href="#"><FaInstagram className='w-8 h-8 text-pink-700'/></Link>
                     <Link href="#"><AiFillTikTok className='w-8 h-8 text-black'/></Link>
                </div>
                <a href="mailto:education@governorsindh.com"><h3 className='flex items-center text-main'><CiMail className='w-7 h-7 text-main'/> education@governorsindh.com</h3></a>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
