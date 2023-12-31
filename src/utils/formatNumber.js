export const formatNumber = (value) => {
  const formattedValue = (value / 1000).toFixed(1);
  return formattedValue.endsWith(".0")
    ? formattedValue.slice(0, -2) + "k"
    : formattedValue + "k";
};
