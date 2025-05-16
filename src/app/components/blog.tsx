import {
  ArrowUpRight,
  CalendarIcon,
  ChevronRight,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/app/data/blogPost";

export default function Blog() {
  const post = blogPosts.slice(0, 2);
  return (
    <div className="relative w-full">
      <div className="magic-line absolute inset-0" />
      <div
        className="mt-14 md:min-h-screen md:mt-10 py-5 max-w-6xl mx-auto px-3 flex"
        id="blog"
      >
        <div className="relative flex md:h-screen w-full flex-col items-center justify-center ">
          {/* Title */}
          <div>
            <div className="absolute left-0 flex w-full items-center gap-5">
              <h2 className="text-2xl w-fit font-bold">
                <span className="text-primary ">04. </span>
                <span>Blog</span>
              </h2>
              <hr className="h-[2px] w-1/6 border-none bg-primary" />
            </div>
          </div>
          {/* Blog me Text */}
          <div className="relative max-w-3xl mx-auto mt-15 md:mt-10">
            {/* <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px md:ml-0"></div> */}
            <div className="space-y-12">
              {post.map((post, index) => (
                <div
                  key={post.id}
                  className={`relative ${index % 2 === 0 ? "md:pr:12" : "md:pl-12 md:ml-auto"}}`}
                >
                  <div
                    className={`flex flex-col ${index % 2 === 0 ? "md:items-end md:text-right" : "md:items-start"}}`}
                  >
                    <div
                      className={`absolute top-0 ${
                        index % 2 === 0
                          ? "left-0 md:right-0 md:left-auto"
                          : "left-0"
                      } w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 border border-primary flex items-center justify-center -mt-2  md:ml-6 ${
                        index % 2 === 0 ? "md:-mr-5" : "md:-ml-5"
                      }`}
                    >
                      <CalendarIcon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-primary mb-2 md:mr-8 ml-10  ">
                      {post.date}
                    </span>
                    <div
                      className={`mt-2 backdrop-blur-md bg-white/10 hover:bg-white/15 border-t border-white/20 transition-all duration-300 w-full md:w-[calc(100%-2rem)] rounded-lg px-6 py-4 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          key={index}
                          className="px-2 py-0.5 text-xs rounded-full backdrop-blur-md bg-white/20 text-white border border-white/30"
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.readTime}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="hover:underline"
                      >
                        <h3 className="font-bold text-xl mb-2">{post.title}</h3>
                      </Link>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <button className="p-0 h-auto flex items-center justify-center ">
                        <Link
                          href={`/blog/${post.id}`}
                          className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-white/30 text-primary text-sm"
                          aria-label={`View Blog Post`}
                        >
                          Read more <ArrowUpRight size={15} />
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <button className="px-5 py-2 border-primary border-2 bg-primary rounded-sm text-black hover:bg-transparent hover:text-white transition-all duration-200 ease-in-out cursor-pointer font-semibold">
                  See more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
