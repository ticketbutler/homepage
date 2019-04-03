// @flow
import * as React from "react";
import { Layout } from "../layouts/";
import Header from "../components/Header";
import ContentImage from "../components/content_image";
import FutureLayers from "../components/future_layers";
import Contact from "../components/Contact";
import Testimonials from "../components/testimonials";
import PriceCalculator from "../components/price_calculator";
import NewsletterSubscription from "../components/newsletter_page";
import ImagesList from "../components/images_list";
import FeaturesNavigation from "../components/elements/feature_navigation";
// import Success from "../pages/thanks";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const components: Array<{ Component: React.Component<*>, id: string }> = [
  { Component: Header, id: "header" },

  { Component: ContentImage, id: "content_image" },

  { Component: FutureLayers, id: "future_layers" },
  { Component: Testimonials, id: "testimonials" },
  { Component: PriceCalculator, id: "price-calculator" },
  { Component: Contact, id: "contact" },
  { Component: NewsletterSubscription, id: "newsletter-subscription" },
  { Component: ImagesList, id: "listOfImages" },
  { Component: FeaturesNavigation, id: "feature-navigation" }
  // { Component: Success, id: "success" }
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
