import * as React from "react";
import { Layout } from "../layouts/";
import Header from "../components/Header";
import FutureImageRight from "../components/future_image_right";
import FutureImageIeft from "../components/future_image_left";
import TallCenteredFuture from "../components/tall_centered_future";
import TallCenteredFutureButtonTop from "../components/tall_centered_future_button_top";
import FutureImageRightSecond from "../components/future_image_right_second";
import FutureImageRightNew from "../components/future_image_right_new";
import FutureLayers from "../components/future_layers";

import LogoSection from "../components/logo-section";
import SliderSection from "../components/slider_section";

import FeaturePage from "../components/feature_page";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const components = [
  { Component: Header, id: "header" },

  { Component: FutureImageRight, id: "future_image_right" },
  { Component: FutureImageIeft, id: "future_image_left" },
  { Component: TallCenteredFuture, id: "tall_centered_future" },
  {
    Component: TallCenteredFutureButtonTop,
    id: "tall_centered_future_button_top"
  },
  { Component: FutureImageRightSecond, id: "future_image_right_second" },
  { Component: FutureImageRightNew, id: "future_image_right_new" },
  { Component: FutureLayers, id: "future_layers" }
];

const CmsPage = ({ pathContext }) => (
  <Layout {...pathContext.layout}>
    {pathContext.sections &&
      pathContext.sections.map((section, i) => {
        const Component = components.find(({ id }) => id === section.type)
          .Component;

        if (pathContext.testimonials) {
          if (i === 4)
            return (
              <React.Fragment>
                <Component key={i} {...section} />
                <SliderSection
                  items={
                    pathContext.testimonials ? pathContext.testimonials : []
                  }
                />
              </React.Fragment>
            );
        }

        if (pathContext.logo_section) {
          if (i === 6)
            return (
              <React.Fragment>
                <Component key={i} {...section} />
                <LogoSection
                  items={
                    pathContext.logo_section
                      ? pathContext.logo_section.items
                      : []
                  }
                  heading={
                    pathContext.logo_section
                      ? pathContext.logo_section.heading
                      : []
                  }
                />
              </React.Fragment>
            );

          if (i === 8)
            return (
              <React.Fragment>
                <Component key={i} {...section} />
                <LogoSection
                  items={
                    pathContext.logo_section
                      ? pathContext.logo_section.items
                      : []
                  }
                  heading={
                    pathContext.logo_section
                      ? pathContext.logo_section.heading
                      : []
                  }
                />
              </React.Fragment>
            );
        }

        if (pathContext.pages_path == "/da/features") {
          if (i === 0)
            return (
              <React.Fragment>
                <FeaturePage
                  heading={
                    pathContext.feature_page
                      ? pathContext.feature_page.heading
                      : []
                  }
                  paragraph={
                    pathContext.feature_page
                      ? pathContext.feature_page.heading
                      : []
                  }
                  items={
                    pathContext.feature_page
                      ? pathContext.feature_page.items
                      : []
                  }
                />
                <Component key={i} {...section} />
              </React.Fragment>
            );
        }

        return <Component key={i} {...section} />;
      })}
  </Layout>
);

export default CmsPage;
