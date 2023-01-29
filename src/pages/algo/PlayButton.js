import { useRef } from "react";
import "./PlayButton.scss";
function PlayButton(props) {
  let started = useRef(false);
  if (!props.isActive && started.current) {
    document.querySelector("#circle").setAttribute("class", "");
    document.querySelector("#from_pause_to_play").beginElement();
    started.current = false;
  }
  return (
    <svg
      width="90"
      height="90"
      id="pause"
      viewBox="45 20 50 110"
      onClick={() => {
        props.handler();
        if (props.isActive) {
          document.querySelector("#circle").setAttribute("class", "");
          document.querySelector("#from_pause_to_play").beginElement();
        } else {
          document.querySelector("#circle").setAttribute("class", "pause");
          document.querySelector("#from_play_to_pause").beginElement();
        }
        started.current = true;
      }}
    >
      <circle
        id="circle"
        cx="51"
        cy="51"
        r="30"
        strokeDasharray="30"
        strokeDashoffset="0"
        style={{ strokeWidth: "2px", stroke: "black" }}
      />
      <line
        id="line1"
        x1="38"
        y1="30"
        x2="38"
        y2="70"
        style={{
          strokeWidth: "4px",
          stroke: "black",
          strokeLinecap: "round",
        }}
      />
      <path
        id="line2"
        d="M 38 30 L 70 50 L 38 70"
        rx="10"
        ry="10"
        style={{
          strokeWidth: "4px",
          stroke: "black",
          fill: "black",
          strokeLinejoin: "round",
          strokeLinecap: "round",
        }}
      >
        <animate
          attributeName="d"
          dur="300ms"
          from="M 66 30 L 66 50 L 66 70"
          to="M 38 30 L 70 50 L 38 70"
          begin="indefinite"
          fill="freeze"
          id="from_pause_to_play"
        />
      </path>
      <animate
        xlinkHref="#line2"
        attributeName="d"
        dur="300ms"
        from="M 38 30 L 70 50 L 38 70"
        to="M 66 30 L 66 50 L 66 70"
        fill="freeze"
        id="from_play_to_pause"
        begin="indefinite"
      />
    </svg>
  );
}
export default PlayButton;
