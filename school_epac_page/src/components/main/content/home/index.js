import React, { memo } from 'react'
import { HomeWrapper } from './style'
import DataShow from './data-show'
// import DataAnalysis from './data-analysis'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <DataShow />
      {/* <DataAnalysis /> */}
    </HomeWrapper>
  )
})

export default Home