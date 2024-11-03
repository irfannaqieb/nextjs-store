export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
  }).format(value);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("ms-MY", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
