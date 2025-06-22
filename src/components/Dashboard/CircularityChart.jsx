import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './CircularityChart.css';

const data = [
  { name: 'Reused', value: 35 },
  { name: 'Recycled', value: 43 },
  { name: 'Landfilled', value: 22 },
];

const COLORS = ['#2E8B57', '#4682B4', '#E74C3C'];

const CircularityChart = () => {
  return (
    <div className="circularity-chart">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="chart-legend">
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="legend-item">
            <span 
              className="legend-color" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span>{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularityChart;