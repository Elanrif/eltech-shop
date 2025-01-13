import Newsletter from '@/components/newsletter'
import ShareSocilaMedia from '@/components/share-social-media'
import React from 'react'

export default function Home() {
  return (
    <div className='min-h-[24rem] p-5 bg-slate-100'>
      <Newsletter/>
      <ShareSocilaMedia/>
    </div>
  )
}
