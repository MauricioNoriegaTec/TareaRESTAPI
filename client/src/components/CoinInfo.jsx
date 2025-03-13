import { Card, CardContent, Typography, Box } from '@mui/material';

function CoinInfo({ coin }) {
  return (
    <Card sx={{ marginBottom: 0, backgroundColor: 'orange', color: 'white'}}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {coin.name}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 0 }}>
            {coin.quantity}
        </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CoinInfo;