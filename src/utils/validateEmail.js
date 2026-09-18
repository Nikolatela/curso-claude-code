const LOCAL_PART_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
const LABEL_REGEX = /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?$/;

const isValidEmail = (email) => {
  if (typeof email !== 'string') return false;

  const atIndex = email.indexOf('@');
  if (atIndex <= 0 || atIndex !== email.lastIndexOf('@')) return false;

  const localPart = email.slice(0, atIndex);
  const domain = email.slice(atIndex + 1);

  if (!LOCAL_PART_REGEX.test(localPart)) return false;

  const labels = domain.split('.');
  if (labels.length < 2) return false;
  if (!labels.every((label) => LABEL_REGEX.test(label))) return false;

  const tld = labels[labels.length - 1];
  return tld.length >= 2 && /^[a-zA-Z]+$/.test(tld);
};

module.exports = { isValidEmail };
