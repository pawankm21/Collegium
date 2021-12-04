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
export {MONTHS,formatDate};
