import type { AppPropsWithLayout } from "next/app";

import { Head } from "~/components/core";

import "~/assets/css/global.css";

type _AppProps = AppPropsWithLayout;

const _App = ({ Component, pageProps }: _AppProps) => {
  const getLayout = Component.getLayout ?? ((page) => <>{page}</>);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default _App;
