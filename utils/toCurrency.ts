export const toCurrency = (number: number) =>
  number?.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

export const currencyToFloat = (number: string) => {
  let value = Number(String(number).replace(/\D/g, ''));
  return parseFloat((value / 100).toFixed(2));
};
