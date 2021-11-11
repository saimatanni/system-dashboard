import React from 'react'
import ReactDOM from 'react-dom';
import ChartistGraph from 'react-chartist';
import '../Style/dashboard.css'

const ProjectGraph = () => {
    
    const simpleChartData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        series: [
          [800000, 1200000, 1400000, 1300000],
          [200000, 400000, 500000, 300000],
          [100000, 200000, 400000, 600000]
        ]

}

const options = {
   stackBars: true
}
    return (
        <div className="graph">
            <ChartistGraph data={simpleChartData} options={options} type={'Bar'} /> 
        </div>
    )
}

export default ProjectGraph
