export function generateSpacingToken() {
  const spacingToken: Record<string, string> = {};
  
  for (let i = 0; i <= 96; i += 4) {
    spacingToken[i] = `${i / 4}rem`;
  }

  spacingToken['px'] = '1px';
  spacingToken[0.5] = '0.125rem';
  spacingToken[1.5] = '0.375rem';
  spacingToken[2.5] = '0.625rem';
  spacingToken[3.5] = '0.875rem';

  return spacingToken;
};
