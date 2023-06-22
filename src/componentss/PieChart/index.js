import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

const data = [
  {
    count: 809680,
    language: "Telugu",
  },
  {
    count: 4555697,
    language: "Hindi",
  },
  {
    count: 12345657,
    language: "English",
  },
]

const Charts = () => {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <PieChart>
        <Pie
          cx="50%"
          cy="50%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="0%"
          outerRadius="70%"
          dataKey="count"
        >
            
          <Cell name="Basic Trees" fill="orange"/>
          <Cell name="Custom Shortpants" fill="#b3d23f" />
          <Cell name="Super Hoodies" fill="#a44c9e" />
        </Pie>
        <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  </ResponsiveContainer>
)
}

export default Charts