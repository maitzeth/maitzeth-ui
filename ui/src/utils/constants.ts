export const breakpoints = {
  sm: "460px",
  md: "768px",
  lg: "1024px",
} as const;

export const devices = {
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`
};
