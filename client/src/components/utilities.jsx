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
  var hours = d.getHours();
  var minutes = d.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${minutes} ${ampm} ${day} ${month}, ${year}`;
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
  if (days > 0) {
    return { message: `closing in ${days} days`, color: "bg-blue-500" };
  } else {
    return {
      message: `closed ${Math.abs(days)} days ago`,
      color: "bg-red-500",
    };
  }
}

function isAuthenticated() {
  if (sessionStorage.getItem("id")) {
    return true;
  }

  return false;
}
export { MONTHS, formatDate, parseTags, classNames, leftDays, isAuthenticated };
