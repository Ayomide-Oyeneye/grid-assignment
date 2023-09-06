export const range = (start, end= start, step = 1) => {
  let output = [];
  if (end === start) {
    end = start;
    start = 2;
  }
  for (let i = start; i <= end; i += step) {
    output.push(i);
  }
  return output;
};