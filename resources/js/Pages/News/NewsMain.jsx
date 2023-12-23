import NewsLandingPage from "./Partials/NewsLandingPage";
import NewsTrending from "./Partials/NewsTrending";
import { Head } from "@inertiajs/react";
const NewsMain = () => {
    return (
        <div className="grid lg:gap-y-16">
            <Head title="News" />
            <NewsLandingPage />
            <NewsTrending />
        </div>
    );
};

export default NewsMain;
