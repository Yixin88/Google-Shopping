'use client'

import Image from "next/image"
import Link from "next/link"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import SearchButton from "./SearchButton"
import { SearchSelect, SearchSelectItem, Select, SelectItem } from "@tremor/react"
import Avatar from "react-avatar"

const SORT_BY_MAP = {
  r: "Default",
  rv: "By Review",
  p: "By Price (low to high)",
  pd: "By Price (high to low)"
}

function Header() {
  return (
    <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
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

          <div className="grid grid-cols-2 gap-2 p-4 md:grid-cols-4 max-w-lg md:max-w-none mx-auto item-center">
            <SearchSelect className="min-w-4" placeholder="# of pages">
              {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i+1).toString()}>
                  {(i+1).toString()} pages
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <Select className="min-w-4" placeholder="Sort">
              {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>{value}</SelectItem>
              ))}
            </Select>

            <SearchSelect className="min-w-4" placeholder="Min Price...">
              {["", "100", "250", "500", "750", "900", "1000+"].map((val, i) => (
                <SearchSelectItem key={i} value={val.toString()}>
                  {i === 0 ? "No Minimum" : `$${val.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>

            <SearchSelect className="min-w-4" placeholder="Max Price...">
              {["", "100", "250", "500", "750", "900", "1000+"].map((val, i) => (
                <SearchSelectItem key={i} value={val.toString()}>
                  {i === 0 ? "No Maximum" : `$${val.toString()}`}
                </SearchSelectItem>
              ))}
            </SearchSelect>

          </div>
        </form>
      </div>

      <div className="hidden lg:flex flex-1 justify-end">
        <Avatar name="Yixin Zhang" round size="50"/>
      </div>
    </header>
  )
}

export default Header