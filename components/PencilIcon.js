import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

const PencilIcon = () => (
  <Svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M5.79313 14.0001H3C2.86739 14.0001 2.74021 13.9474 2.64645 13.8536C2.55268 13.7599 2.5 13.6327 2.5 13.5001V10.707C2.50006 10.5745 2.55266 10.4475 2.64625 10.3538L10.3538 2.64633C10.4475 2.55263 10.5746 2.5 10.7072 2.5C10.8397 2.5 10.9669 2.55263 11.0606 2.64633L13.8538 5.43758C13.9474 5.53134 14.0001 5.65847 14.0001 5.79102C14.0001 5.92357 13.9474 6.0507 13.8538 6.14446L6.14625 13.8538C6.05255 13.9474 5.92556 14 5.79313 14.0001Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.5 4.5L12 8"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect
          width="16"
          height="16"
          fill="white"
          transform="translate(0 0.5)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default PencilIcon;
