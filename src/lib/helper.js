export const showElapsedTime = timestamp => {
  // if (typeof timestamp !== 'number') return 'NaN';

  const SECOND = 1000;
  const MINUTE = SECOND * 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const MONTH = DAY * 30;
  const YEAR = MONTH * 12;

  const elapsed = new Date() - new Date(timestamp);

  if (elapsed <= MINUTE)
    return `${Math.round(elapsed / SECOND)} second${Math.round(elapsed / HOUR) > 1 ? 's' : ''}`;
  if (elapsed <= HOUR)
    return `${Math.round(elapsed / MINUTE)} minute${Math.round(elapsed / MINUTE) > 1 ? 's' : ''}`;
  if (elapsed <= DAY)
    return `${Math.round(elapsed / HOUR)} hour${Math.round(elapsed / HOUR) > 1 ? 's' : ''}`;
  if (elapsed <= MONTH)
    return `${Math.round(elapsed / DAY)} day${Math.round(elapsed / DAY) > 1 ? 's' : ''}`;
  if (elapsed <= YEAR)
    return `${Math.round(elapsed / MONTH)} month${Math.round(elapsed / MONTH) > 1 ? 's' : ''}`;
  return `${Math.round(elapsed / YEAR)}year${Math.round(elapsed / MONTH) > 1 ? 's' : ''}`;
};

export const getDomain = urlParam => {
  let url = new URL(urlParam);
  let hostname = url.hostname;
  if (url.hostname.indexOf('www.') > -1) {
    hostname = url.hostname.split('www.')[1];
  }
  return hostname;
};
