import * as React from "react";
import renderer from "react-test-renderer";
import { Layout } from "../layouts/";

describe("the Layout component", () => {
  it("renders", () => {
    expect(
      renderer
        .create(
          <Layout>
            {() => {
              return <div />;
            }}
          </Layout>
        )
        .toJSON()
    ).toMatchSnapshot();
  });
});
