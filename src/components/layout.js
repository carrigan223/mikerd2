import React from "react";
import { Global, css } from "@emotion/react"; //emotion/core was renamed emotion/react
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        //below is the global styles wrapping all the pages adjust here for top level changes
        styles={css`
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Racing Sans One", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
              "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

            color: #222;
            line-height: 1.1;
            + * {
              margin-top: 0.5rem;
            }
          }

          a {
            color: black;
            font-family: "Racing Sans One";

            :hover {
              color: white;
              text-shadow: 0 0 2px red, 0 0 2px red, 0 0 7px red, 0 0 1px red;
            }
          }
        `}
      />
      <Helmet>
        <html lang="en" />
        <title>McCarron Auto</title>
      </Helmet>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
