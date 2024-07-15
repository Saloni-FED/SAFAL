import Head from "next/head";
import { useRouter } from "next/router";

//top header
import TopHeader from "./TopHeader";

import  { Toaster } from 'react-hot-toast';
//navbar
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";

//footer
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <Head>
        <title>Safal Capital</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Safal - React Next Blockchain & Cryptocurrency Template"
        />
      </Head>

      {/* {pathname === "/" ? <TopHeader /> : ""} */}
      {pathname === "/index-2" ? <NavbarTwo /> : <div>
        <Navbar/>
        </div>}

      {children}
      <Toaster/>

      <Footer />
    </>
  );
};

export default Layout;
