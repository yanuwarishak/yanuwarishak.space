import SideNowPlaying from "@/components/spotify/SideNowPlaying";
import MenuButton from "@/components/MenuButton";
import "styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="fixed w-screen z-0 p-6">
        <div className="max-w-2xl relative left-52 hidden items-center justify-end mx-auto 2lg:flex">
          <SideNowPlaying />
        </div>
      </div>
      <div className="mb-14 xs:mb-0">
        <Component {...pageProps} />
      </div>
      <MenuButton />
    </>
  );
}

export default MyApp;
