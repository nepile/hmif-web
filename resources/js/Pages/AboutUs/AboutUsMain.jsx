import AboutUsLandingPage from "./Partials/AboutUsLandingPage";
import AboutUsContent from "./Partials/AboutUsContent"
import { Head } from "@inertiajs/react";

const AboutUsMain = () => {
   return(
        <>
            <Head title="About Us" />
            <AboutUsLandingPage></AboutUsLandingPage>
            <AboutUsContent></AboutUsContent>
        </>
   )

}

export default AboutUsMain;