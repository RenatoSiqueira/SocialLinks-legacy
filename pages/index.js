import React from "react";
import Prismic from "prismic-javascript";

import Component from "../components";

const Index = ({ data }) => {
  return <Component {...data} />;
};

export async function getServerSideProps(context) {
  let subDomain = "renatosiqueira";

  const fullUrl = context.req.headers.host;

  if (fullUrl.indexOf("localhost" >= 0)) {
    if (fullUrl.length > 14) {
      subDomain = fullUrl.slice(0, fullUrl.indexOf("localhost") - 1);
    }
    const client = Prismic.client(`https://${subDomain}.cdn.prismic.io/api/v2`);
    const box = await client.getSingle("box");
    return {
      props: {
        data: box.data,
      },
    };
  } else {
    console.log("false");
  }
  return null;
}

export default Index;
