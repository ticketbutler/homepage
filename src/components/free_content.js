import * as React from "react";

const FreeContent = ({ content }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};
