import React from "react";
import Link from "next/link";
import { capitalize } from "../lib/helpers";
import Container from "./container";

export default function Category() {
  const categoryArray = [
    "technology",
    "health",
    "education",
    "entertainment",
    "others",
  ];
  return (
    <div>
      <section className="flex flex-row justify-evenly m-12">
        {categoryArray.map((category) => {
          return (
            <Link
              href={`/category/${category}`}
              as={`/category/${category}`}
              key={category}
            >
              <a className="bg-gray-400 flex justify-center w-40 h-12 rounded">
                <h4 className="my-auto">{capitalize(category)}</h4>
              </a>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
