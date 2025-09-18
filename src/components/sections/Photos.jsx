export const Photos = () => {
  return (
    <section
      id="photos"
      className="min-h-screen flex flex-col items-center justify-center relative"
    >
      <div className="text-center z-10 px-4 grid grid-cols-2 gap-1">
        <h1 className="text-base md:text-3xl mb-3 p-24 bg-gradient-to-r from-blue-500 to-purple-600 leading-right">
          <a
            href="https://www.instagram.com/sulai3030/"
            className="hover:underline"
          >
            Please enjoy some of my photos!
          </a>
        </h1>
        <div className="object-cover">
          <img
            src="/src/assets/horsecloud.JPG"
            alt="Gallery Image 1"
            className="w-full h-auto rounded-lg shadow-lg"
            object-cover
          />
        </div>
        <img
          src="src/assets/54487597069_aaa4ce8560_c.jpg"
          alt="Gallery Image 2"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <img
          src="src/assets/54487674233_de3d1278f0_c.jpg
          "
          alt="Gallery Image 3"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <img
          src="/src/assets/54484194432_b38c16ac61_c.jpg"
          alt="Gallery Image 4"
          className="w-full h-auto rounded-lg shadow-lg"
        />
        <img
          src="src/assets/54487398471_77ef349fb6_c.jpg"
          alt="Gallery Image 5"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};
