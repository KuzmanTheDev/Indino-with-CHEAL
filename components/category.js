import React, { useState } from "react";
import Link from "next/link";
import { capitalize } from "../lib/helpers";
import nProgress from "nprogress";

export default function Category() {
  // const [loading, setLoading] = useState(false);
  // const loader = (e) => {
  //   nProgress.start();
  // };
  const categoryArray = [
    "technology",
    "health",
    "education",
    "entertainment",
    "others",
  ];
  return (
    <div>
      <section className="flex flex-row justify-evenly p-3 m-5  overflow-x-auto">
        {categoryArray.map((category) => {
          return (
            <Link
              href={`/category/${category}`}
              as={`/category/${category}`}
              key={category}
            >
              <a className="bg-gray-200 flex justify-center m-2 md:m-0 rounded-full py-2 px-4">
                <h4 className="my-auto text-black">{capitalize(category)}</h4>
              </a>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
