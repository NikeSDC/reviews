
import React from "react";

function Flag(props) {

  return (
    <a href="none" onClick={(event) => {event.preventDefault(), console.log('hello')}} name={"flag"}>
      <svg
      id = "flag"
        height="1em"
        width="1em"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"

      >
        <path name="flag"
          d="M4 17v5H2V3h19.138a.5.5 0 0 1 .435.748L18 10l3.573 6.252a.5.5 0 0 1-.435.748H4zM4 5v10h14.554l-2.858-5 2.858-5H4z"
        />
      </svg>
    </a>
  );
}

export default Flag;
