
export const USD_TO_INR_RATE = 83.50; // Current approximate exchange rate

export const formatINR = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const convertUSDToINR = (usdAmount: string): number => {
  const numericAmount = parseFloat(usdAmount.replace(/[$,]/g, ''));
  return Math.round(numericAmount * USD_TO_INR_RATE);
};

export const formatCurrency = (amount: number | string): string => {
  if (typeof amount === 'string') {
    return formatINR(convertUSDToINR(amount));
  }
  return formatINR(amount);
};
