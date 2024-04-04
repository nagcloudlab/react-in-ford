import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string[];
  };
}

function Page({ params }: Props) {
  if (params.slug.length > 0) {
    if (params.slug[0] === "a") {
      notFound();
    }
  }
  return (
    <div>
      <h1>Docs Page</h1>
      <p>Slug: {params.slug?.join(",")}</p>
    </div>
  );
}

export default Page;
