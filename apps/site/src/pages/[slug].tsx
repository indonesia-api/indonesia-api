import {} from "react";

import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from "next";

import { Head } from "~/components/core";

import { APIs } from "@indonesia-api/data";
import type { API } from "@indonesia-api/data";

import { RootLayout } from "~/components/layouts";
import { APIDetail } from "~/components/features";

type Props = {
  api: API;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: APIs.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const api = APIs.find((api) => api.slug === params.slug);

  return {
    props: {
      api: api,
    },
    notFound: typeof api === "undefined",
  };
};

const APIDetailPage: NextPageWithLayout<Props> = (props) => {
  const { api } = props;

  return (
    <>
      <Head title={{ prefix: api.name }} />

      <div>
        <APIDetail api={api} />
      </div>
    </>
  );
};

APIDetailPage.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default APIDetailPage;
