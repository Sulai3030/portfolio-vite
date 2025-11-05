import { React,  }  from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";

const ReadMore = () => {
  //  Initialize state
  const [isExpanded, setIsExpanded] = useState(false);

  //Toggle Function
  const toggleExpansion = () => {
    setIsExpanded((prevState) => !prevState);
  };

  //Sample content to show hide
  const content = `True Detective s1: This is the show you need to be watching right now. All your friends are watching it and you don’t want to be left out.

There are not a lot of shows nowadays that you really need to see in real time, and very few shows catch the zeitgeist anymore, what with our super short attention spans. But True Detective, the new atmospheric show from HBO, is one of those shows.

 I have a friend who posed the question on her Facebook wall of whether she should start watching the True Detective, and almost immediately she had 50 unique responses telling her that she needed to stop what she was doing and start watching the show now. Do not pass go, do not collect $200.

Matthew McConaughey and the fantastic Woody Harrelson play detectives Rust Cohle and Marty Hart, respectively. Hart is a conflicted family man who has a bad habit of stepping out on his wife – who is played by Michelle Monaghan – and Cohle is his new partner just transferred from Texas.

Hart is an optimist he believes that most people are good and that if they just stabilized their home lives like he thinks he does, then everything will be all good. Cohle is the polar opposite. He believes that the fact that man evolved a frontal lobe was the worst mistake the universe ever let happen.

Watching these two men try to solve the bizarre murder of a young prostitute over the course of 17 years is a straight-up trip. The show is not shown chronologically, yet you will never be at a loss as to when or why stuff is happening.

The acting is superb, the direction is outstanding. I dare you not to freak out during one particular episode when you realize that the entire second half of the episode is a single take with no edits at all. Cary Fukunaga has immediately made a name for himself as a director to watch for.

He’s currently slated to direct the new version of IT by Stephen King, and given what he has accomplished he seems to be the perfect director for it. And really if any movie needed to be remade, IT would be it. The original is awful – I don’t care what you say. Fine, Tim Curry as Pennywise was inspired, but everything else was putrescent.

 Additionally, Nic Pizzolatto has written some of the best dialog and best characters I’ve come across is a long while. The interplay between partners who spend all day in a car together is so well executed. A different friend of mine texted me wondering which of us was the world-weary nihilist Cohle, given our agreement with Cohle on a lot of what he says. You’ll be wondering which character you agree with more.

This show is awesome. Flat out. Watch it.
`;

  //Determine the content to show
  const shownContent = isExpanded ? content : `${content.substring(0, 250)}...`;

  return (
    <>
      <section
        id="blog"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="bg-black h-screen flex items-center justify-center text-left">
          <div className=" p-7 w-5/6">
            <div>
              <div className="text-4xl font-bold mb-4 text-[#2BC3F0]">Blog Posts</div>
              <div>
                <p className="text-base mb-4 text-white hover:underline">
                  <a href="https://www.linkedin.com/company/new-york-minute-magazine/posts/?feedView=all">
                    These are writings that I did that were previously published
                    on the web. The rights belong to the holders.
                  </a>
                </p>
              </div>
            </div>
            <p>{shownContent}</p>
            <button
              className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={toggleExpansion}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadMore;

