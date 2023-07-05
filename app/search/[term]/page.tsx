import ResultsList from '@/components/ResultsList'
import { getFetchUrl } from '@/lib/getFetchUrl'
import { SearchParams, PageResult } from '@/typings'
import { redirect } from 'next/navigation'
import React from 'react'

export const revalidate = 300;

type searchPageProps = {
  searchParams: SearchParams
  params: {
    term: string
  }
}

async function SearchPage({searchParams, params: {term}}: searchPageProps) {
  if (!term) {
    redirect("/")
  }

  //fetch from api

  const response = await fetch(getFetchUrl('api/search'), {
    method: "POST",
    body: JSON.stringify({searchTerm: term, ...searchParams})
  })

  const results = await response.json() as PageResult[]

  console.log(results)

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  )
}

export default SearchPage