import * as React from "react";
import Layout from "../layouts";
import Hero from "../components/Hero";

const components = [
  { Component: Hero, id: "hero" },
  { Component: null, id: "image_left" },
  { Component: null, id: "image_right" }
];

const CmsPage = ({ pathContext }) => (
  <Layout>
    <div>
      asdas
      {pathContext.sections.map(section => {
        const Component = components.find(({ id }) => id === section.type)
          .Component;
        return <Component {...section} />;
      })}
    </div>
  </Layout>
);

export default CmsPage;
