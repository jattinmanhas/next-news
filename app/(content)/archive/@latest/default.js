import NewsList from '@/components/news-list'
import { getLatestNews } from '@/lib/news'
import React from 'react'

function LatestPage() {
    const latestNews = getLatestNews();

  return (
    <>
        <h2>Latest News</h2>
        <NewsList news={latestNews} />
    </>
  )
}

export default LatestPage