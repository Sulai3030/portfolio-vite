// Separate component for clarity
import { useState } from "react";


function BlogPosts({ post }) {
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
export default BlogPosts;
