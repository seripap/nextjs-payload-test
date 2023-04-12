import React from "react";
import { notFound } from "next/navigation";
import getPayload from "../../payload";

const Page = async ({ params: { slug } }) => {
  const payload = await getPayload();

  const pages = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug || "home",
      },
    },
  });

  const page = pages.docs[0];

  if (!page) return notFound();

  return <h1>Hello, this is the "{page.slug}" page!</h1>;
};

export async function generateStaticParams() {
  const payload = await getPayload();

  const pages = await payload.find({
    collection: "pages",
    limit: 0,
  });

  return pages.docs.map(({ slug }) => ({ slug }));
}
export default Page;
