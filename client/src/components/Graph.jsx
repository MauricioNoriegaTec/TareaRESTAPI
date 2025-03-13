import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

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
    <Paper elevation={0} sx={{ padding: 2, backgroundColor: 'transparent', color: 'white' }}>
      <Typography variant="h6" sx={{ marginBottom: 2, color: 'orange' }}>
        Portfolio Value
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="white" />
          <XAxis dataKey="name" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip contentStyle={{ backgroundColor: 'black', borderColor: 'white' }} itemStyle={{ color: 'white' }} />
          <Legend />
          <Line type="monotone" dataKey="price" stroke="orange" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default Graph;