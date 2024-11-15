import React from "react";
import Header from "../../components/Header";
import LatestNews from "../../components/LatestNews";
import Navbar from "../../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews />
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-3">
        <Navbar />
      </nav>
      <main></main>
    </div>
  );
};

export default HomeLayout;
