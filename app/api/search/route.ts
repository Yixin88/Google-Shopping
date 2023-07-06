import { SearchParams, PageResult } from "@/typings"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const { searchTerm, pages, ...params } = await request.json()
  const searchParams: SearchParams = params

  if (!searchTerm) {
    return NextResponse.next(
      new Response("Missing search term", {
        status: 400
      })
    )
  }

  const filters: any = []

  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      if (key === 'max-price') {
        if (value = "1000+") return
      }

      filters.push({
        key,
        value: key === "sort_by" ? value : Number(value)
      })
    }
  })

  const response = await fetch('https://realtime.oxylabs.io/v1/queries', {
    method: 'POST',
    body: JSON.stringify({
      source: 'google_shopping_search',
      domain: 'co.uk',
      query: searchTerm,
      pages: Number(pages) || 1,
      parse: true,
      context: filters,
    }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + Buffer.from(`${process.env.OXYLABS_USERNAME}:${process.env.OXYLABS_PASSWORD}`).toString('base64'),
    },
    cache: "no-store"
  })

  const data = await response.json();

  const pageResults: PageResult[] = data.results;

  return NextResponse.json(pageResults);
}