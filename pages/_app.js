import MenuButton from "@/components/MenuButton";
import "styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="mb-14 xs:mb-0">
        <Component {...pageProps} />
      </div>
      <MenuButton />
    </>
  );
}

export default MyApp;
