
import React from "react";

function Star(props) {

  return (
    <a href="none" onClick={(event) => {event.preventDefault(), console.log('hello')}} name={"tester"} value="1">
      <svg
      id = "tester"
        height="1em"
        width="1em"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        fill={props.fill}

      >
        <path name="testers"
          d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
        />
      </svg>
    </a>
  );
}

export default Star;
