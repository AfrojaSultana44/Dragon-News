import React from "react";
import Header from "../../components/Header";
import LatestNews from "../../components/LatestNews";
import Navbar from "../../components/Navbar";
import LeftNavbar from "../../components/layout-component/LeftNavbar";

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
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="col-span-3"><LeftNavbar/></aside>
        <section className="col-span-6">main content</section>
        <aside className="col-span-3">right nav</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
