// input = Wed Jul 23 2025 00:00:00 GMT+0900 (한국 표준시)
// output = 2025-07-23
export function formattedDate(date) {
  const formatter = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const parts = formatter.formatToParts(date);
  const year = parts.find((p) => p.type === 'year').value;
  const month = parts.find((p) => p.type === 'month').value;
  const day = parts.find((p) => p.type === 'day').value;
  const formatted = `${year}-${month}-${day}`;

  return formatted;
}

// input = 10 : 00
// output = 오전/오후 10 : 10
export function formattedTime(time) {
  const hours = time.substring(0, 2);
  const minutes = time.substring(3, 5);
  const hour = parseInt(hours);
  const halfDay = 12;

  if (hour < halfDay) {
    return `오전 ${hour}:${minutes}`;
  } else if (hour === halfDay) {
    return `오후 12:${minutes}`;
  } else {
    return `오후 ${hour - halfDay}:${minutes}`;
  }
}

// input = Wed Jul 30 2025 00:00:00 GMT+0900 (한국 표준시)
// output = 20250730
export function dateToNumber(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return parseInt(`${year}${month}${day}`, 10);
}

export function formatToKoreanDate(date) {
  const [year, month, day] = date.split('-');

  return `${year}년 ${month}월 ${day}일`;
}

export function getAccessToken() {
  const accessToken = localStorage.getItem('accessToken');
  return accessToken;
}
