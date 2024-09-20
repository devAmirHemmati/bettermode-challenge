function normalizeValue(value: number): string {
  return value < 10 ? `0${value}` : value.toString();
}

function transformDate(
  date: string,
  type?: 'date' | 'time' | 'date-time',
): string {
  if (!date) return '';
  const d = new Date(date);
  const year = d.getUTCFullYear();
  const month = normalizeValue(d.getUTCMonth() + 1); // Corrected: add 1 to month
  const day = normalizeValue(d.getUTCDate()); // Corrected: use getUTCDate() for day of the month
  const dateStr = `${month}/${day}/${year}`;
  const timeStr = `${normalizeValue(d.getUTCHours())}:${normalizeValue(d.getUTCMinutes())}`;

  switch (type) {
    case 'time':
      return timeStr;

    case 'date-time':
      return `${dateStr} ${timeStr}`;

    case 'date':
    default:
      return dateStr;
  }
}

export default transformDate;
