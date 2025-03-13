import { Container, Grid, Box } from '@mui/material';
import Graph from '../components/Graph';
import CoinInfo from '../components/CoinInfo';
import Header from '../components/Header';

const coins = [
  { name: 'Bitcoin', price: 50000, quantity: 1 },
  { name: 'Ethereum', price: 3000, quantity: 5 },
  { name: 'Litecoin', price: 200, quantity: 10 },
  { name: 'XRP', price: 2, quantity: 2300 },
  { name: 'Cardano', price: 1.5, quantity: 1500 },
  { name: 'Chainlink', price: 25, quantity: 200 },
];

function Portfolio() {
  return (
    <Box sx={{ backgroundColor: '', minHeight: '100vh', padding: 2 }}>
      <Container maxWidth="lg" sx={{ marginTop: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} md={8}>
            <Graph />
          </Grid>
          <Grid item md={4} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
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