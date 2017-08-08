export const HOUR = 'hour';
export const SECOND = 'second';

export const timer = (state = new Date(), { type }: any) => {
  const date = new Date(state.getTime());

  switch (type) {
    case SECOND:
      date.setSeconds(date.getSeconds() + 5);
      return date;

    case HOUR:
      date.setHours(date.getHours() + 1);
      return date;
  }

  return state
}
