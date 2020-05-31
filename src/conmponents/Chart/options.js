/* eslint-disable arrow-body-style */
import * as echarts from 'echarts'

import { pointIcon, tooltipFormatter, labelFormatter } from './vievs'
import { dataToDate, tooltipPosition } from './utils'
import demoData from '../../data'

const colors = {
  greenGradient: new echarts.graphic.LinearGradient(0, 0, 0, 1.2, [{ offset: 0, color: 'rgba(62, 192, 173, 0.2)' }, { offset: 1, color: 'rgba(62, 192, 173, 0)' }]),
  grayGradient: new echarts.graphic.LinearGradient(0, 0, 0, 2, [{ offset: 0, color: 'rgba(161, 159, 176, 0)' }, { offset: 1, color: 'rgba(161, 159, 176, 0.2)' }]),
  gray: '#9E9FA7',
  green: '#3EC0AD',
  lightgreen: '#E4F6F3',
  white: '#FFFFFF',
  transparent: 'transparent',
}

const xAxisData = dataToDate(demoData)

export const options = {
  grid: {
    left: -60,
    right: 29,
    top: 10,
    bottom: 0,
    containLabel: true,
  },
  tooltip: {
    trigger: 'axis',
    backgroundColor: colors.transparent,
    textStyle: {
      color: 'black',
    },
    formatter: (e) => tooltipFormatter(e, xAxisData),
    position: (point, params, dom, rect, size) => {
      return tooltipPosition(point, params, dom, rect, size, options)
    },
  },
  xAxis: {
    axisLabel: {
      inside: false,
      backgroundColor: colors.white,
      fontFamily: 'Rubik',
      fontWeight: 500,
      color: colors.gray,
      formatter: labelFormatter,
      axisTick: {
        lineStyle: {
          opacity: 0,
        },
      },
    },
    type: 'category',
    boundaryGap: false,
    axisLine: {
      lineStyle: {
        color: colors.transparent,
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: colors.grayGradient,
      },
    },
    data: xAxisData,
    axisPointer: {
      z: 0,
      lineStyle: {
        color: colors.lightgreen,
        width: 9,
        borderRadius: 2,
      },
    },
  },
  yAxis: {
    show: false,
    boundaryGap: ['0%', '100%'],
    type: 'value',
    splitLine: {
      show: false,
    },
  },
  series: [{
    data: demoData,
    type: 'line',
    smooth: true,
    symbol: pointIcon,
    symbolSize: 35,
    symbolOffset: [0, 3],
    showSymbol: false,
    cursor: 'arrow',
    lineStyle: {
      color: colors.green,
    },
    areaStyle: {
      color: colors.greenGradient,
    },
  }],
}

export const chartStyle = {
  height: '100%',
  width: '100%',
}
