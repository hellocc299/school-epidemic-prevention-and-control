import React, { memo } from 'react'
import { DataAnalysisWrapper } from './style'
import {
  LineEchart
} from '@/base-ui/echart'

const DataAnalysis = memo(() => {
  return (
    <DataAnalysisWrapper>
      <LineEchart  options="option"/>
    </DataAnalysisWrapper>
  )
})

export default DataAnalysis