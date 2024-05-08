import Link from 'next/link'
import React from 'react'
import Logo from '../../../../../public/logo/stussy.svg'
import Image from 'next/image';
import Bag from '../bag/Bag';
import Search from '@/components/search/Search';
import { navbar } from '@/utils/data/navbar';

const Navbar = ({ route }: { route?: 'example' }) => {
  return (
    <nav className="py-3 px-5 max-md:px-3 max-md:py-2 border-b border-black/5 flex justify-center w-full sticky top-0 bg-white">
      <div className="flex items-center max-w-[1400px] w-full gap-4 justify-between">
        <div className="flex gap-16 items-center">
          <Link href={route === "example" ? "/example" : "/"}>
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="logo"
              className="w-14 h-auto"
            />
          </Link>
          <ul className="flex gap-4 items-center">
            {navbar.map((item) => {
              return (
                <li key={item.path}>
                  <Link
                    href={route === "example" ? `/${route}${item.path}`  : item.path}
                    className={
                      "text-xs font-medium text-black flex items-center gap-1"
                    }
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="flex gap-8 items-center">
          <li>
            <Search />
          </li>
          <li>
            <Bag />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar