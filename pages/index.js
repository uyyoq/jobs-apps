import React, { useEffect } from 'react'
import { useRouter, } from 'next/router'
import Navbar from "../components/Navbar/index"

const index = () => {
  const router = useRouter()
  useEffect(() => {
    router.push("/indonesia")
  }, [])
  return (
    <>
      <Navbar />
    </>
  )

}

export default index
