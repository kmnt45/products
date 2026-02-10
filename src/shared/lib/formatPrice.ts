export const formatPrice = (value: number) => {
  const formatted = value.toLocaleString('ru-RU', { minimumFractionDigits: 2 });

  const [rub, kop] = formatted.split(',');

  return { rub, kop };
};
