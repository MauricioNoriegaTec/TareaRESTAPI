import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper } from '@mui/material';

const data = [
  { name: 'Jan', price: 40000 },
  { name: 'Feb', price: 45000 },
  { name: 'Mar', price: 47000 },
  { name: 'Apr', price: 42000 },
  { name: 'May', price: 48000 },
  { name: 'Jun', price: 50000 },
];

function Graph() {
  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default Graph;