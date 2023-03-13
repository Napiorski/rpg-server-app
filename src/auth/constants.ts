// TODO: replace secret with a complex secret and keep it safe outside of the source code.
export const jwtConstants = {
  secret: `${process.env.JWT_SECRET}`,
};
