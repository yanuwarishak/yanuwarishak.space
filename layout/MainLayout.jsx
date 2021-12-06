import Head from "next/head";
import { useRouter } from "next/router";

import AsideNavbar from "./AsideNavbar";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function MainLayout(props) {
  const { LeftContent, RightContent, children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "Yanuwar Ishak – Front-end Developer.",
    description: `Front-end developer, JavaScript enthusiast, and lifelong learner.`,
    image: "https://yanuwarishak.space/assets/images/banner.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="pqE_KOffJNpiwEPFTDA9C8hR4j3QMafjlS-MLZgeepg"
        />
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
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yanuwarrr" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <div className="flex flex-col self-center relative mx-auto md:grid md:grid-cols-mediumLayout lg:grid-cols-layout p-4 md:p-6 gap-4">
        {/* Left Container */}
        <aside className="relative hidden md:flex md:flex-col w-full items-end">
          <div className="sticky top-6 w-full 2lg:w-48 flex flex-col items-end">
            <AsideNavbar />
            <LeftContent />
          </div>
        </aside>
        {/* Main Content */}
        <div className="flex flex-col justify-start gap-12 md:gap-8">
          <Navbar />
          <main className="flex flex-col min-h-screen gap-6">{children}</main>
          <Footer />
        </div>
        {/* Right Container */}
        <aside className="relative hidden lg:flex lg:flex-col w-full">
          <div className="sticky top-6 w-full 2lg:w-64 flex flex-col gap-4">
            <RightContent />
          </div>
        </aside>
      </div>
    </>
  );
}
