import * as React from "react";

function FacebookLogo(props) {
  return (
    <svg
      width="1.5em"
      height="1.5em"
      viewBox="88.428 12.828 107.543 207.085"
      {...props}
    >
      <path
        d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
        fill={props.fill ? props.fill : "#43609D"}
      />
    </svg>
  );
}

export default FacebookLogo;
