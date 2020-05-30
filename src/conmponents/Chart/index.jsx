import React from 'react'
import ReactEcharts from 'echarts-for-react'

import { options, chartStyle } from './options'

import './styles.scss'

const Chart = () => (
  <div className="chart-container">
    <ReactEcharts
      option={options}
      style={chartStyle}
    />
  </div>
)

export default Chart
