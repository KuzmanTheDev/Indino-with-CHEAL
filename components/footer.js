export default function Footer() {
  return (
    <footer className="bottom-0 h-40 p-12">
      <div className="flex text-black justify-center">
        <p className="text-xl font-sans leading-tight ">
          Made by
          <a href="https://github.com/KuzmanTheDev">
            <span className="tracking-wide hover:underline">
              {" "}
              KuzmanTheDev.{" "}
            </span>
          </a>
        </p>
      </div>
    </footer>
  );
}
