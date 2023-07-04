'use client'

import Image from "next/image"
import Link from "next/link"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import SearchButton from "./SearchButton"

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <Image src="https://links.papareact.com/208" alt="Google Logo" width={150} height={150} className="object-contain mr-10"/>
      </Link>

      <div className="w-full md:max-w-2xl">
        <form action="">
          <div className="flex items-center gap-2 w-full px-4">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 flex-1">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400"/>
              <input type="text" placeholder="Search..." name="searchTerm" className="outline-none flex-1" />
            </div>

            <SearchButton />

          </div>
        </form>
      </div>
    </header>
  )
}

export default Header