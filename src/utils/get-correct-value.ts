export function getCorrectValue(
  value: number | string | undefined,
  unit = "rem",
) {
  if (!value) {
    return `0${unit}`;
  }

  if (typeof value === "number") {
    return `${value}${unit}`;
  }

  return value;
}
