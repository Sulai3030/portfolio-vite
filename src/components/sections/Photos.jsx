import { RevealOnScroll } from "../RevealOnScroll";

export const Photos = () => {
  return (
    <section id="photos" className="py-24 px-4 relative">
      {""}
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 columns-2 flex flex-col justify-between p-4 leading-normal">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
            Photos
          </h2>
          <h2 className="text-1xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center">
            One of my pastimes is nature photography. Here are some of my
            favorite shots.
          </h2>
          <div className="mx-auto px-4 columns-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/1.jpg"
                alt="photo1"
              />
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 columns-2">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center"></h2>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="src/assets/3.jpg"
                alt="photo3"
              />
            </a>
          </div>
          <div className="max-w-3xl mx-auto px-4 columns-2 flex flex-col justify-between p-4 leading-normal">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center"></h2>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/2.jpg"
                  alt="photo1"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-3xl mx-auto px-4 columns-2">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center"></h2>
            <div className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/3.jpg"
                  alt="photo3"
                />
              </a>
            </div>
            <div className="max-w-3xl mx-auto px-4 columns-1">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center"></h2>
              <div className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="src/assets/54486557502_146131e926_c.jpg"
                    alt="photo4"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto px-4 columns-2">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center"></h2>
            <div className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="src/assets/54487398471_77ef349fb6_c.jpg"
                  alt="photo6"
                />
              </a>
            </div>
            <div className="max-w-3xl mx-auto px-4 columns-1">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-[#71D7F5] bg-clip-text text-transparent text-center"></h2>
              <div className="max-w-3xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src="src/assets/54487597704_6725f269b7_c.jpg"
                    alt="photo7"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
