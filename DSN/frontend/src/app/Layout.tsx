import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

type Props = {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = 'DeveloperHub' }: Props) => {
  return (
      <div className="layout">
          <Head>
              <title>{title}</title>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
              <link rel="stylesheet" href="/styles/styles.css"/>
          </Head>
          <Header/>
          <main>{children}</main>
        <Footer />
      </div>
  );
}

export default Layout;