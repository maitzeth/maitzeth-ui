export const breakpoints = {
  xs: "280px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
} as const;

export const devices = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`
};
