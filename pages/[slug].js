import React, { useEffect } from "react";
import Prismic from "prismic-javascript";
import { useRouter } from "next/router";

const RedirectTo = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return <h1>Url Não Encontrada</h1>;
};

// export async function getServerSideProps({ params, res }) {
//   // console.log(params);
//   // const client = Prismic.client(`https://renatosiqueira.cdn.prismic.io/api/v2`);
//   // const link = await client.getByUID("shortlink", params.slug);
//   // console.log(link);
//   // if (link) {
//   //   res.statusCode = 301;
//   //   res.setHeader("Location", link.data.destino.url);
//   //   res.end();
//   //   return;
//   // }
//   // return {
//   //   props: {},
//   // };
// }

export default RedirectTo;
