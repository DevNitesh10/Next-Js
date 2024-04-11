'use client'

import { useParams, useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter()
    // let params = useParams();
    // let id = params.id;
    // console.log(params)

    const {id} = useParams();

  return (
    <div>page {id}
    <br />
    
    <button onClick={() => router.back()}>Previous</button>
    <br />
    <button onClick={() => router.forward()}>Next</button>
    <br />
    <button onClick={() => router.push('/test/test1')}>Test Page</button>

    </div>

  )
}

export default page