import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-white w-full p-18 shadow-md mb-5">
      <h1 className="text-black text-2xl md:text-6xl font-bold font-kuz1 leading-tight py-3.5 px-9">
        <Link href="/">
          <a className=" hover:grey ">Indino</a>
        </Link>
        .
      </h1>
    </div>
  );
}
