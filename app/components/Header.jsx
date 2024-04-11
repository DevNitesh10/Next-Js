import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <div>
        <Link href="/test/test1">Test 1</Link>
        <br />
        <Link href="/test/test2">Test 2</Link>


    </div>
  )
}

export default Header