import {PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

const COLORS = ['#28a745', '#dc3545', '#ffc107'] // Won, Lost, Draw

const MatchStatsPieChart = props => {
  const {statsData} = props

  return (
    <div className="chart-container">
      <PieChart width={300} height={300} margin={{top: 10, right: 10, bottom: 10, left: 10}}>
        <Pie
          cx="50%"
          cy="50%"
          data={statsData}
          dataKey="value"
          nameKey="name"
          outerRadius={120}
        >
          {statsData.map((each, index) => (
            <Cell key={each.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          iconType="square"
          wrapperStyle={{
            fontSize: 18,
            fontFamily: 'Roboto',
          }}
        />
      </PieChart>
    </div>
  )
}

export default MatchStatsPieChart
