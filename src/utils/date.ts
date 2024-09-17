function transformDate(date: string): string {
  if (!date) return '';
  const [year, month, day] = date.split('T')?.[0]?.split('-');

  return `${month}/${day}/${year}`;
}

export default transformDate;
