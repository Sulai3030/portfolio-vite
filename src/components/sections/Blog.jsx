import { useState } from "react";

const ReadMore = () => {
  //  Initialize state
  const [isExpanded, setIsExpanded] = useState(false);

  //Toggle Function
  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  //Sample content to show hide
  const content = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptates mollitia veritatis consequatur fuga provident, alias labore voluptatibus nobis? Sed cum natus explicabo fugit! Itaque porro quas ipsam expedita repellendus aliquid ea harum eveniet perspiciatis explicabo, ullam, totam molestiae, ipsum doloribus labore magni quidem? Velit voluptates quaerat saepe iusto sit sed incidunt explicabo aut veritatis dolore magni, nam voluptatem tenetur, doloremque iure itaque, eveniet alias delectus ea officia id consequatur amet laborum! Minima nulla quam autem veniam omnis esse non!`;

  //Determine the content to show
  const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

  return (
    <>
      <div className="bg-[#00010c] h-screen flex items-left justify-center text-left">
        <div className="bg-black p-7 w-5/6">
          <p>{shownContent}</p>
          <button
            className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={toggleExpansion}
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ReadMore;
