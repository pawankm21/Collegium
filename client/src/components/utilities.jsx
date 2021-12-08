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
export { MONTHS, formatDate, parseTags ,classNames};
