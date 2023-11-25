import React from "react";
import { Helmet } from "react-helmet";
import HomeUpcomingEvents from "./elements/HomeUpcomingEvents";
import HomeLandingPage from "./elements/HomeLandingPage";
import HomeAboutUs from "./elements/HomeAboutUs";

function Home() {
  return (
    <div className="grid lg:gap-y-16">
      <Helmet>
        <title>Dinamika Bersama Himpunan Mahasiswa Informatika | HMIF</title>
      </Helmet>

      <HomeLandingPage />

      <HomeUpcomingEvents />

      <HomeAboutUs />
    </div>
  );
}

export default Home;