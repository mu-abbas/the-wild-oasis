export function currencyFormat(num) {
  return `$${num.toFixed(2)}`;
}

export function getTimeDifference(passedDate) {
  // Check if the input is a valid Date object
  const date = new Date(passedDate);

  if (!(date instanceof Date)) {
    throw new TypeError('Input must be a valid Date object');
  }

  const today = new Date();
  const diffInMs = today.getTime() - date.getTime(); // Difference in milliseconds

  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (days < 7) {
    return `${days} day${days > 1 ? 's' : ''}`;
  } else if (days < 30) {
    return `${weeks} week${weeks > 1 ? 's' : ''}`;
  } else if (years > 0) {
    return `${years} year${years > 1 ? 's' : ''}`;
  } else {
    return `${months} month${months > 1 ? 's' : ''}`;
  }
}

export function dateFormatter(passedDate) {
  const date = new Date(passedDate);

  if (!(date instanceof Date)) {
    throw new TypeError('Input must be a valid Date object');
  }

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
