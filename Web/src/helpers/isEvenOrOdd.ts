export function isEven(value: number) {
  return value % 2 == 0;
}

export function isOdd(value: number) {
  return Math.abs(value % 2) == 1;
}
