const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
function formatDate(date) {
  const d = new Date(date);
  const month = MONTHS[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();
  return `${day} ${month}, ${year}`;
}

function parseTags(tags) {
  let tagList = tags.split(",");
  return tagList;
}
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function leftDays(date) {
  const today = new Date();
  const left = new Date(date) - today;
  const days = Math.floor(left / (1000 * 60 * 60 * 24));
  if (days > 0)
  {
    return {message:`${days} days left`,color:"bg-blue-500"};
  }
  else {
    return {message:`${Math.abs(days)} days ago`,color:"bg-red-500"};
  }
}
export { MONTHS, formatDate, parseTags ,classNames,leftDays};
