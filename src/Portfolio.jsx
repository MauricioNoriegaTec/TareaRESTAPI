import { Container, Grid, Box } from '@mui/material';
import Graph from './components/Graph';
import CoinInfo from './components/CoinInfo';
import Header from './components/Header';

const coins = [
  { name: 'Bitcoin', price: 50000, quantity: 1.2 },
  { name: 'Ethereum', price: 3000, quantity: 5 },
  { name: 'Litecoin', price: 200, quantity: 10 },
  { name: 'XRP', price: 2, quantity: 2300 },
];

function Portfolio() {
  return (
    <Box sx={{ backgroundColor: 'grey', minHeight: '100vh', padding: 2 }}>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} md={8}>
            <Graph />
          </Grid>
          <Grid item xs={12} md={4}>
            {coins.map((coin, index) => (
              <CoinInfo key={index} coin={coin} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Portfolio;