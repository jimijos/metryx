import React from "react";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  position: relative;
  top: 40%;
  left: 45%;
  @media only screen and (max-width: 500px) {
    left: 30%;
  }
`;

export default function Loding() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        background: "rgba(10, 12, 10, 0.9)",
        zIndex: 10,
      }}
    >
      <ClipLoader color={"crimson"} loading={true} css={override} size={150} />
    </div>
  );
}
