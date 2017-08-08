export const timer = (state = new Date(), { type }: any) => {
  const date = new Date(state.getTime());

  switch (type) {
    case 'second':
      date.setSeconds(date.getSeconds() + 5);
      return date;

    case 'hour':
      date.setHours(date.getHours() + 1);
      return date;
  }

  return state
}
