import { RevealOnScroll } from "../RevealOnScroll";

export const Photos = () => {
  return (
    <section id="photos" className="py-24 px-4 relative">
      {""}
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 columns-3 flex flex-col justify-between p-4 leading-normal">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
            Photos
          </h2>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
            </a>
          </div>
        </div>

        <a
          href="#"
          class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src="/docs/images/blog/image-4.jpg"
            alt=""
          />
          <div class="flex flex-col justify-between p-4 leading-normal max-w-3xl mx-auto px-4 columns-3">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
        </a>

        <div className="max-w-3xl mx-auto px-4 columns-3">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
            Photos
          </h2>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
            </a>
          </div>
        </div>
        <div>
          <div className="max-w-3xl mx-auto px-4 columns-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
              Photos
            </h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
              </a>
            </div>
          </div>
          <div className="max-w-3xl mx-auto px-4 columns-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
              Photos
            </h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
