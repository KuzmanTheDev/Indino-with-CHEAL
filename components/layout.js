import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";
import ScrollToTop from "./scroll-to-top";

export default function Layout({ preview, children }) {
  return (
    <>
      <Header />
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
}
