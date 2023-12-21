import React from "react";
import HomeUpcomingEvents from "./Partials/HomeUpcomingEvents";
import HomeLandingPage from "./Partials/HomeLandingPage";
import HomeAboutUs from "./Partials/HomeAboutUs";
import HomeNews from "./Partials/HomeNews";
import { Head } from "@inertiajs/react";

function Home() {
    return (
        <div className="grid lg:gap-y-16">
            <Head title="Berdinamika Bersama Himpunan Mahasiswa Informatika" />

            <HomeLandingPage />

            <HomeUpcomingEvents />

            <HomeAboutUs />

            <HomeNews />
        </div>
    );
}

export default Home;
