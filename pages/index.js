import React, { useEffect } from 'react'
import { useRouter, } from 'next/router'
import Navbar from "../components/Navbar/index"
// import { ReactQueryDevtools } from 'react-query-devtools';

const index = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/indonesia")
  }, [])
  return (
    <>
      <Navbar />
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </>
  )

}

export default index
