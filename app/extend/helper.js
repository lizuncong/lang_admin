const dayjs = require('dayjs');

module.exports = {
  time() {
    return dayjs().format('YYYY-MM-DD HH:mm:ss');
  },
  timestamp(data) {
    return new Date(data).getTime();
  },
  unPick(source, arr) {
    if (Array.isArray(arr)) {
      const obj = {};
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }

  },
};
