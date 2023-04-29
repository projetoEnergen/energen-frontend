import React from 'react';
import numeral from 'numeral';

type PriceProps = {
  value: number;
};

const Price: React.FC<PriceProps> = ({ value }) => {
  const formattedPrice = numeral(value).format('R$ 0,0.00');
  return <span>{formattedPrice}</span>;
};

export default Price;