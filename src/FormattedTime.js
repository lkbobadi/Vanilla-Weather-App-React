import React from "react";

export default function FormattedTime(props) {
  let ampm = "";

  let hour = [
    12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11,
  ];
  let hours = hour[props.date.getHours()];

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 11) {
    ampm = "AM";
  } else {
    ampm = "PM";
  }

  return (
    <div>
      {hours}:{minutes}
      {ampm}
    </div>
  );
}
