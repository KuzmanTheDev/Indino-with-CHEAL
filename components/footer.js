export default function Footer() {
  return (
    <footer className="bg-gray-300 bottom-0 h-40 p-12">
      <div className="flex text-black">
        <p className="text-xl font-sans leading-tight ">
          Made by
          <a href="https://github.com/KuzmanTheDev">
            <span className="tracking-wide hover:underline">
              {" "}
              KuzmanTheDev.{" "}
            </span>
          </a>
          Powered by Sanity.io
        </p>
      </div>
    </footer>
  );
}
