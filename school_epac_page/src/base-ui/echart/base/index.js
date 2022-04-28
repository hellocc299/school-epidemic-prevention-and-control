import React, { memo, useEffect, useRef, useState } from 'react'
import { EChartWrapper } from './style'
import * as echarts from 'echarts'

const CCEChart = memo((props) => {
  const { options } = props
  // const [isInit, setIsInit] = useState(false)
  // const [initOptions, setInitOptions] = useState()
  // useEffect(() => {
  //   if(isInit) {
  //     setIsInit(true)
  //   } else {

  //   }
  // })
  console.log(options);
  const echartDivRef = useRef()
  const [echartInstance, setEchartInstance] = useState()
  useEffect(() => {
    const divElement = echartDivRef.current
    setEchartInstance(echarts.init(divElement))
  }, [])
  if(echartInstance && options) {
    echartInstance.setOption(options)
    // const updateSize = () => {
    //   echartInstance.resize()
    // }
    window.addEventListener('resize', () => {
      echartInstance.resize()
    })
  }
  
  return (
    <EChartWrapper>
      <div ref={echartDivRef} className='myEchart'></div>
    </EChartWrapper>
  )
})

export default CCEChart