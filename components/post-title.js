export default function PostTitle({ children }) {
  return (
    <h1 className="text-6xl md:text-3xl lg:text-5xl font-bold font-sans tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  );
}
