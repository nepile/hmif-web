import NewsLandingPage from "./Partials/NewsLandingPage";
import NewsTrending from "./Partials/NewsTrending";

const NewsMain = () => {
    return (
        <div className="grid lg:gap-y-16">
            <NewsLandingPage />
            <NewsTrending />
        </div>
    );
};

export default NewsMain;
