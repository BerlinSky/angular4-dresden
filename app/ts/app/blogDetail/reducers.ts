export const HOUR = 'hour';
export const SECOND = 'second';

export const timer = (state = new Date(), { type, payload }: any) => {
  const date = new Date(state.getTime());

  switch (type) {
    case SECOND:
      date.setSeconds(date.getSeconds() + payload);
      return date;

    case HOUR:
      date.setHours(date.getHours() + payload);
      return date;
  }

  return state
}
