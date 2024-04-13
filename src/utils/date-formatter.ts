import dayjs from 'dayjs';

export const DateFormatter = (date?: string | Date) => {
  return dayjs(date).format('ddd DD-MM-YYYY, HH:MM A');
};
