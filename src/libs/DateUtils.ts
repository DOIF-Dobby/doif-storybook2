import moment from 'moment';
import _ from 'lodash';

/**
 * date 타입만 갖고 있는 object => string 타입으로 변환 후 object로 반환
 */
const mapDateString = (dateObj: {
  [index: string]: Date | null;
}): { [index: string]: string } => {
  const stringObj = _.mapValues(dateObj, (o) => {
    if (!o) return '';

    const format = o.getHours() === 0 ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm';

    return moment(o).format(format);
  });

  return stringObj;
};

export default {
  mapDateString,
};
