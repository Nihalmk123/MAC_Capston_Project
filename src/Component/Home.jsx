import React, { useState } from 'react'
import Layout from './Layout/Layout'

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  )

}

export default Home