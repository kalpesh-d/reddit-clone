function getTimeAgo(unixTimestamp) {
  const now = Math.floor(new Date().getTime() / 1000);

  // Calculate the difference in seconds
  const differenceInSeconds = now - unixTimestamp;

  // Define time intervals
  const intervals = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  // Calculate relative time
  for (const [interval, seconds] of Object.entries(intervals)) {
    const intervalValue = Math.floor(differenceInSeconds / seconds);

    if (intervalValue >= 1) {
      return `${intervalValue} ${interval}${intervalValue > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}

export default getTimeAgo;
