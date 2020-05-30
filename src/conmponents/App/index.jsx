import React from 'react'

import './App.css'

import demoData from '../../data'
import Card from '../Card'
import Chart from '../Chart'
import Info from '../Info'

const Index = () => (
  <div className="App">
    <div className="warp">
      <Info data={demoData} />
      <Card>
        <Chart />
      </Card>
    </div>
  </div>
)

export default Index
