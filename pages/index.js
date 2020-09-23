const { isResSent } = require("next/dist/next-server/lib/utils");
import React from 'react';
import Navbar from '../components/Navbar';

const Jobs = () => {
  return(
    <div>
      <Navbar />
      <h1>Jobs</h1>
    </div>
  )
}

export default Jobs