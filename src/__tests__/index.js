import * as React from "react";
import TestRenderer from "react-test-renderer";

import { Navbar } from "../components/navbar";

describe("the Layout component", () => {
  it("renders", () => {
    expect(
      TestRenderer.create(
        <Navbar>
          {() => {
            return <div id="bars" />;
          }}
        </Navbar>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
