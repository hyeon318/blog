import Image from 'next/image';
import profileImage from '../../public/images/profile.png';
import Link from 'next/link';

export default function Hero() {
  return  <section className="text-center">
            <Image 
              className='rounded-full mx-auto'
              src={profileImage} 
              alt='Picture of of the author' 
              width={250} 
              height={250}
              priority
              />
            <h2 className='text-3xl font-bold mt-2'>{"Hi, I'm HyeonJi"}</h2>
            <h3 className='text-xl font-semibold'>Full-stack Engineer</h3>
            <p>집에 가고싶은 현지,</p>
            <Link href="/contact">
              <button className='bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2'>contact me</button>
            </Link>
          </section>;
}