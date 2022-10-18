import moment from 'moment';

export function dateFormat(format, date = new Date()) {
  date = new Date(date);
  return moment(date).format(format);
}
