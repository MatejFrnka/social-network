import React, { ReactNode } from 'react';
import Head from 'next/head';
import "@/app/landing_page_style.css";

type Props = {
    children: ReactNode;
    title?: string;
    header?: ReactNode;
    footer?: ReactNode;
};

const Layout = ({ children, title = 'DeveloperHub', header, footer }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            {header}
            <main>{children}</main>
            {footer}
        </div>
    );
};

export default Layout;