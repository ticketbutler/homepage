import * as React from "react";
import TestRenderer from "react-test-renderer";
import { Layout } from "../layouts/";

// import { Navbar } from "../components/navbar";

describe("the Layout component", () => {
  it("renders", () => {
    expect(
      TestRenderer.create(
        <Layout>
          {() => {
            return <div />;
          }}
        </Layout>
      ).toJSON()
    ).toMatchSnapshot();
  });
});
