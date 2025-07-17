export function formattedDate(date) {
  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const parts = formatter.formatToParts(date);
  const y = parts.find((p) => p.type === 'year').value;
  const m = parts.find((p) => p.type === 'month').value;
  const d = parts.find((p) => p.type === 'day').value;
  const formatted = `${y}-${m}-${d}`;

  return formatted;
}

export function formattedTime(time) {
  const hours = time.substring(0, 2);
  const minutes = time.substring(3, 5);
  const hour = parseInt(hours);

  if (hour < 12) {
    return `오전 ${hour}:${minutes}`;
  } else if (hour === 12) {
    return `오후 12:${minutes}`;
  } else {
    return `오후 ${hour - 12}:${minutes}`;
  }
}
