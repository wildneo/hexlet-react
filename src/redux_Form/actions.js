export const change = (value) => ({
  type: 'TEXT_CHANGE',
  payload: {
    value,
  },
});

export const reset = () => ({
  type: 'TEXT_RESET',
});
