import React from "react";
import { render, cleanup } from "@testing-library/react";
import Loding from "../components/Loading";

afterEach(cleanup);

it("should take a snapshot of initial Loading Component", () => {
  const { asFragment } = render(<Loding />);

  expect(asFragment(<Loding />)).toMatchSnapshot();
});
