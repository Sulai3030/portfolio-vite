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
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            <a href="#">
              <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 columns-3">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">

          </h2>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
            </a>
          </div>
          <div className="max-w-3xl mx-auto px-4 columns-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
              Photos right
            </h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="/public/2.jpg" alt="photo1" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-3xl mx-auto px-4 columns-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">

            </h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="public/3.jpg" alt="photo3" />
              </a>
            </div>
            <div className="max-w-3xl mx-auto px-4 columns-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
              Photos-right
            </h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
              </a>
            </div>
          </div>
          </div>
          <div className="max-w-3xl mx-auto px-4 columns-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">

            </h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
              </a>
            </div>
            <div className="max-w-3xl mx-auto px-4 columns-3">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
              Photos right
            </h2>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img class="rounded-t-lg" src="public/1.jpg" alt="photo1" />
              </a>
            </div>
          </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
