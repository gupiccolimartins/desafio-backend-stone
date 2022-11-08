const buildMsgError = (err: Error | any, originMsg: string = '') => {
  let message = '';

  if (err) {
    if (err.message) {
      ({ message } = err);
    } else if (typeof err === 'object') {
      message = JSON.stringify(err);
    } else {
      message = err.toString();
    }
  }

  message = message || '';
  message = message.replace(/\n|\t/g, ' ');
  message = message.replace(/\s+/g, ' ');
  if (originMsg) {
    return `${message} - ${originMsg}`;
  }

  return message;
};

export { buildMsgError };