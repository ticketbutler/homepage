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
import Contact from "../components/Contact";
import Testimonials from "../components/testimonials";
import PriceCalculator from "../components/price_calculator";
import NewsletterSubscription from "../components/newsletter_page";
import CompanyLogos from "../components/logo-section";
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
  { Component: FutureLayers, id: "future_layers" },
  { Component: Testimonials, id: "testimonials" },
  { Component: PriceCalculator, id: "price-calculator" },
  { Component: Contact, id: "contact" },
  { Component: NewsletterSubscription, id: "newsletter-subscription" },
  { Componenet: CompanyLogos, id: "Company_logos" }
];

const CmsPage = ({ pageContext }) => (
  <Layout {...pageContext}>
    {pageContext.sections &&
      pageContext.sections.map((section, i) => {
        try {
          const Component = components.find(({ id }) => id === section.type)
            .Component;

          return <Component key={i} {...pageContext} {...section} />;
        } catch (e) {
          return null;
        }
      })}
  </Layout>
);

export default CmsPage;
