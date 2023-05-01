export const median = (arr) => {
  const sorted = arr.toSorted((a, b) => a - b);
  const index = Math.floor(arr.length / 2);
  return arr.length % 2 === 0
    ? (sorted[index - 1] + sorted[index]) / 2
    : sorted[index];
};

export const mean = (arr) =>
  arr.reduce((acc, val) => acc + val, 0) / arr.length;

export const nightAndDay = (data, i) => data[i * 2] + (data[i * 2 - 1] || 0);
