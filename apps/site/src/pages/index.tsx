import { useRef } from "react";

import type { GetStaticProps, NextPageWithLayout } from "next";

import { APIs } from "@indonesia-api/data";
import type { API } from "@indonesia-api/data";

import { RootLayout } from "~/components/layouts";
import { AddAPICard, APICard } from "~/components/features";

type Props = {
  apis: API[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return {
    props: {
      apis: APIs,
    },
  };
};

function LineCode() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-1 col-start-1 bg-indigo-400 rounded-full"></div>
          <div className="w-full h-5 col-span-3 col-start-2 bg-indigo-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-1 col-start-1 bg-green-400 rounded-full"></div>
          <div className="w-full h-5 col-span-4 col-start-2 bg-green-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-6 col-start-2 bg-blue-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-2 col-start-3 bg-red-400 rounded-full"></div>
          <div className="w-full h-5 col-span-1 col-start-5 bg-blue-400 rounded-full"></div>
          <div className="w-full h-5 col-span-3 col-start-6 bg-red-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-1 col-start-3 bg-yellow-400 rounded-full"></div>
          <div className="w-full h-5 col-span-3 col-start-4 bg-yellow-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-1 col-start-2 bg-green-400 rounded-full"></div>
          <div className="w-full h-5 col-span-4 col-start-3 bg-indigo-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-7 col-start-3 bg-blue-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-3 col-start-2 bg-red-400 rounded-full"></div>
          <div className="w-full h-5 col-span-2 col-start-5 bg-indigo-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-2 col-start-1 bg-green-400 rounded-full"></div>
          <div className="w-full h-5 col-span-1 col-start-3 bg-green-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />

        <div className="grid flex-grow grid-cols-12 gap-3">
          <div className="w-full h-5 col-span-1 col-start-1 bg-indigo-400 rounded-full"></div>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />
      </div>

      <div className="flex gap-6">
        <div className="w-5 h-5 rounded-full bg-neutral-300" />
      </div>
    </div>
  );
}

const IndexPage: NextPageWithLayout<Props> = (props) => {
  const { apis } = props;

  const apisSectionRef = useRef<HTMLElement | null>(null);

  function handleExploreApi() {
    apisSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section className="p-4 xl:p-8 min-h-[24rem] lg:min-h-[32rem]">
        <div className="flex flex-col items-center justify-between gap-6 xl:flex-row sm:gap-10 md:gap-16">
          <div className="flex flex-col justify-between xl:w-1/2">
            <div className="sm:text-center lg:text-left lg:py-12 xl:py-24 ">
              <h1 className="mb-8 text-4xl font-bold text-black-800 sm:text-5xl md:text-6xl md:mb-12">
                A list of useful APIs in Indonesia
              </h1>

              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5">
                <button
                  className="inline-block px-8 py-3 text-center bg-indigo-500 rounded-lg outline-none text-neutral-50 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base"
                  onClick={handleExploreApi}
                >
                  Explore API
                </button>
              </div>
            </div>
          </div>

          <div className="hidden xl:w-1/2 lg:h-auto xl:block">
            <LineCode />
          </div>
        </div>
      </section>

      <section ref={apisSectionRef} className="p-4 xl:p-8 min-h-[24rem] lg:min-h-[32rem]">
        <div className="grid grid-cols-1 gap-4 my-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-4">
          {apis.map((api, index) => (
            <div key={index.toString()}>
              <APICard api={api} />
            </div>
          ))}

          <div>
            <AddAPICard />
          </div>
        </div>
      </section>
    </>
  );
};

IndexPage.getLayout = (page) => <RootLayout>{page}</RootLayout>;

export default IndexPage;
