'use client'
import React from 'react';
import Layout from "@/app/layout";
import KeyFeatures from "@/app/components/KeyFeatures";
import DevelopersSay from "@/app/components/DevelopersSay";
import Contact from "@/app/components/Contact";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const LandingPage = () => {
    return (
        <Layout
            header={<Header />}
            footer={<Footer />}
        >
            <section className="main">
                <div>
                    <h2>Welcome to <br /><span>DeveloperHub</span></h2>
                    <h3>Join our thriving community of developers to share your code.
                        <br />Elevate your coding experience!</h3>
                    <a href="#Sign_Up" className="main-btn">Sign Up Now</a>
                </div>
            </section>
            <KeyFeatures />
            <DevelopersSay />
            <Contact />
        </Layout>
    );
}

export default LandingPage;