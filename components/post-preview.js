import Link from "next/link";
import Date from "../components/date";
import CoverImage from "./cover-image";
import { imageBuilder } from "../lib/sanity";
export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}) {
  return (
    <div className="m-5 border border-opacity-50 border-gray-300">
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          imageObject={coverImage}
          url={imageBuilder(coverImage).url()}
        />
      </div>
      <h3 className="text-xl font-semibold mb-3 leading-snug" style={{fontWeight: "600"}}>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-sm mb-4">
        <Date dateString={date} />
      </div>
      <p className="text-sm leading-relaxed mb-4">{excerpt}</p>
    </div>
  );
}
