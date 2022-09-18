import {} from "react";

type NotFoundPageProps = {};

function NotFoundPage(props: NotFoundPageProps) {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="flex flex-col items-center">
          <h1 className="mb-2 text-2xl font-bold text-center text-neutral-800 md:text-3xl">Page not found</h1>

          <p className="max-w-screen-md mb-12 text-center text-neutral-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

          <a
            href="/"
            className="inline-block px-8 py-3 text-sm font-semibold text-center transition duration-100 rounded-lg outline-none text-neutral-500 bg-neutral-200 hover:bg-neutral-300 focus-visible:ring ring-indigo-300 active:text-neutral-700 md:text-base"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export type { NotFoundPageProps };
export default NotFoundPage;
