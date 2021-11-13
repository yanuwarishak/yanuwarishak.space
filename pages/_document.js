import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-[#121212] text-white">
          <h1 className="hidden">yanuwarishak.space</h1>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
