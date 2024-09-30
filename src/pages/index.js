import Head from "next/head";

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Product from "@/components/Product";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas vida - Loja de óculos</title>
      </Head>
      <Header/>
      <Banner/>
      <Product/>
      <About/>
      <Contact/>
    </>
  );
}
