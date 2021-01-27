
import React from "react";

function StarHalf(props) {

  return (
    <a href="none" onClick={(event) => {event.preventDefault()}}>
      <svg
      id = "tester"
        height="1em"
        width="1em"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill={props.fill}
      >
        <path fill={props.color}
        strokeLinejoin="round"
        strokeWidth="32"
          d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        />
        <path d="M256 48v316L118 464l54-160-140-96h172l52-160z" />
      </svg>
    </a>
  );
}

export default StarHalf;
