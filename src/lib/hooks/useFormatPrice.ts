export default function useFormatPrice(price: number, currencyCode?: string) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode ?? "USD",
  });
  
  const formattedPrice = formatter.format(price);
  return formattedPrice;
}