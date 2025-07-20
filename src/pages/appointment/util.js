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

export function dateToNumber(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return parseInt(`${year}${month}${day}`, 10);
}

export function formatToKoreanDate(date) {
  const format = date.split('-');

  return `${format[0]}년 ${format[1]}월 ${format[2]}일`;
}

export function getDoctorName(doctorId) {
  let doctorName = '';
  switch (doctorId) {
    case '1':
      doctorName = '최재호';
      break;
    case '2':
      doctorName = '양호진';
      break;
    case '3':
      doctorName = '남현정';
      break;
    case '4':
      doctorName = '김성현';
      break;
    case '5':
      doctorName = '이혜민';
      break;
    case '6':
      doctorName = '김유빈';
      break;
    case '7':
      doctorName = '박다솜';
      break;
  }
  return doctorName;
}
