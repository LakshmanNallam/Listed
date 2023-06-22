import React from 'react'
import { ResponsiveContainer, LineChart, Line,  CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import './index.css'

const data = [
  { label: 'Week1', Guest: 21, User: 41 },
  { label: 'Week2', Guest: 35, User: 79 },
  { label: 'Week3', Guest: 75, User: 57 },
  { label: 'Week4', Guest: 51, User: 47 },
  
];


export default function Recharts() {
  return (
          
            <><div className='graph'>
            
            <h1 className='heading'>Activities</h1>
            </div>
          <ResponsiveContainer width="95%" height={300}>
            <LineChart width={1000} data={data} margin={{ top: 15, right: 0, bottom: 15, left: 0 }}>
              <Tooltip />
              <XAxis dataKey="label"/>
              <YAxis />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <Legend/>
              <Line type="monotone" dataKey="Guest" stroke="#FB8833" strokeWidth={2}/>
              <Line type="monotone" dataKey="User" stroke="#17A8F5" strokeWidth={2}/>
            </LineChart>
          </ResponsiveContainer></>
      
  )
}