import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function Container(props) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Yanuwar Ishak – Front-end Developer.",
    description: `Front-end developer, JavaScript enthusiast, and lifelong learner.`,
    image: "assets/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="index, follow" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yanuwarishak.space${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yanuwarishak.space${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Yanuwar Ishak" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yanuwarrr" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <div className="flex flex-col mx-auto max-w-2xl md:px-0 p-6 h-screen relative">
        <header>
          <Navbar />
        </header>
        <main className="flex flex-col justify-center mt-6">
          {children}
        </main>
        <footer className="flex">
          <Footer />
        </footer>
      </div>
    </>
  );
}
