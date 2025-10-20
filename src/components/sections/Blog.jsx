import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "New York Minute Magazine article",
    href: "https://www.linkedin.com/company/new-york-minute-magazine/posts/?feedView=all",
    description: `This piece appeared on New York Minute Magazine.com in 2014 ©, all rights reserved.This is the show you need to be watching
        right now. All your friends are watching it and you don’t want to be left out.

        There are not a lot of shows nowadays that you really need to see in real time, and very few shows catch the zeitgeist anymore, what with our super short attention spans. But True Detective, the new atmospheric show from HBO, is one of those shows.

        I have a friend who posed the question on her Facebook wall of whether she should start watching the True Detective, and almost immediately she had 50 unique responses telling her that she needed to stop what she was doing and start watching the show now. Do not pass go, do not collect $200.

        Matthew McConaughey and the fantastic Woody Harrelson play detectives Rust Cohle and Marty Hart, respectively. Hart is a conflicted family man who has a bad habit of stepping out on his wife – who is played by Michelle Monaghan – and Cohle is his new partner just transferred from Texas.

        Hart is an optimist he believes that most people are good and that if they just stabilized their home lives like he thinks he does, then        everything will be all good. Cohle is the polar opposite. He believes that the fact that man evolved a frontal lobe was the worst mistake the       universe ever let happen.

        Watching these two men try to solve the bizarre murder of a young prostitute over the course of 17 years is a straight-up trip. The show is not         shown chronologically, yet you will never be at a loss as to when or why stuff is happening.

        The acting is superb, the direction is outstanding. I dare you not to freak out during one particular episode when you realize that the entire        second half of the episode is a single take with no edits at all. Cary Fukunaga has immediately made a name for himself as a director to watch        for.

        He’s currently slated to direct the new version of IT by Stephen King, and given what he has accomplished he seems to be the perfect director for         it. And really if any movie needed to be remade, IT would be it. The original is awful – I don’t care what you say. Fine, Tim Curry as Pennywise        was inspired, but everything else was putrescent.

        Additionally, Nic Pizzolatto has written some of the best dialog and best characters I’ve come across is a long while. The interplay between        partners who spend all day in a car together is so well executed. A different friend of mine texted me wondering which of us was the world-weary      nihilist Cohle, given our agreement with Cohle on a lot of what he says. You’ll be wondering which character you agree with more.

        This show is awesome. Flat out. Watch it.`,
    date: "",
    datetime: "",
    category: { title: "Content Writing", href: "#" },
    author: {
      name: "Sulai Sivadel",
      role: "Film and TV Writer, NYMM",
      href: "https://www.linkedin.com/company/new-york-minute-magazine/",
      imageUrl: "",
    },
  },
  {
    id: 2,
    title: "NYMM TV: True Detective is a Must-Watch",
    href: "#",
    description: "TV Review",
    date: "Mar 13, 2014",
    datetime: "2014-03-10",
    category: { title: "TV Review", href: "#" },
    author: {
      name: "Sulai Sivadel",
      role: "Film and TV Reviewer",
      href: "#",
      imageUrl: "",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Example() {
  return (
    <section
      id="blog"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="bg-black text-gray-300 text-left mb-6 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Further Writing Samples
            </h2>
            <p className="mt-2 text-lg/8 text-gray-300">
              Here are more samples of my paid writing from the web.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Separate component for clarity
function PostCard({ post }) {
  const [expanded, setExpanded] = useState(false);

  const shortText = post.description.slice(0, 100);
  const shouldTruncate = post.description.length > 100;

  return (
    <article className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs text-gray-300">
        <time dateTime={post.datetime} className="text-gray-500">
          {post.date}
        </time>
        <a
          href={post.category.href}
          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
        >
          {post.category.title}
        </a>
      </div>

      <div className="group relative grow">
        <h3 className="mt-3 text-lg/6 font-semibold text-text-gray-300 group-hover:text-gray-600">
          <a href={post.href}>
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>

        <p className="mt-5 text-sm/6 text-gray-300">
          {expanded ? post.description : shortText}
          {shouldTruncate && (
            <>
              {!expanded && "... "}
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-400 hover:text-cyan-400 font-medium ml-1"
              >
                {expanded ? "Read Less" : "Read More"}
              </button>
            </>
          )}
        </p>
      </div>

      <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
        <div className="text-sm/6 text-gray-300">
          <p className="font-semibold text-gray-text-gray-300">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          <p className="text-gray-300">{post.author.role}</p>
        </div>
      </div>
    </article>
  );
}
