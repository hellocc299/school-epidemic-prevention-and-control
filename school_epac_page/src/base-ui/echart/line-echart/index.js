import React, { memo, useState } from 'react'
import { LineEchartWrapper } from './style'
import CCEChart from '../base'
import { options } from './options'

const LineEchart = memo((props) => {
  const fullOption = options("title", "xLabels", "value")
  const [initOpt, setInitOpt] = useState(fullOption)
  console.log(initOpt);
  // const [changeOpt, setChangeOpt] = useState({})
  // const options = {
  //     title: {
  //       text: props.title
  //     },
  //     tooltip: {
  //       trigger: 'axis',
  //       axisPointer: {
  //         type: 'cross',
  //         label: {
  //           backgroundColor: '#6a7985'
  //         }
  //       }
  //     },
  //     legend: {},
  //     toolbox: {
  //       feature: {
  //         saveAsImage: {}
  //       }
  //     },
  //     grid: {
  //       left: '3%',
  //       right: '4%',
  //       bottom: '3%',
  //       containLabel: true
  //     },
  //     xAxis: [
  //       {
  //         type: 'category',
  //         boundaryGap: false,
  //         data: props.xLabels
  //       }
  //     ],
  //     yAxis: [
  //       {
  //         type: 'value'
  //       }
  //     ],
  //     series: [
  //       {
  //         name: '分别销量',
  //         type: 'line',
  //         stack: '总量',
  //         areaStyle: {},
  //         emphasis: {
  //           focus: 'series'
  //         },
  //         data: props.values
  //       }
  //     ]
  //   }
  // useEffect(() => {
  //   setChangeOpt(options)
  // }, [])
  // console.log(changeOpt);
  return (
    <LineEchartWrapper>
      <CCEChart options={initOpt}/>
    </LineEchartWrapper>
  )
})

export default LineEchart