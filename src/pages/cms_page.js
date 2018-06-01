import * as React from "react";
import Layout from "../layouts";

// import Hero from "../components/Hero";
import FutureImageRight from "../components/future_image_right";
import FutureImageIeft from "../components/future_image_left";
import TallCenteredFuture from "../components/tall_centered_future";
import FutureImageRightSecond from "../components/future_image_right_second";
import FutureLayers from "../components/future_layers";
import Contact from "../components/Contact";

const components = [
  // { Component: Hero, id: "hero" },
  { Component: FutureImageRight, id: "future_image_right" },
  { Component: FutureImageIeft, id: "future_image_left" },
  { Component: TallCenteredFuture, id: "tall_centered_future" },
  { Component: FutureImageRightSecond, id: "future_image_right_second" },
  { Component: FutureLayers, id: "future_layers" },
  { Component: Contact, id: "contact" }
];

const CmsPage = ({ pathContext }) => (
  <div>
    {pathContext.sections &&
      pathContext.sections.map(section => {
        const Component = components.find(({ id }) => id === section.type)
          .Component;
        return <Component {...section} />;
      })}
  </div>
);

export default CmsPage;
