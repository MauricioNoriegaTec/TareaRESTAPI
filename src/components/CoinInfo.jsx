import { Card, CardContent, Typography } from '@mui/material';

function CoinInfo({ coin }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">{coin.name}</Typography>
        <Typography variant="body2">Price: ${coin.price}</Typography>
        <Typography variant="body2">Quantity: {coin.quantity}</Typography>
      </CardContent>
    </Card>
  );
}

export default CoinInfo;