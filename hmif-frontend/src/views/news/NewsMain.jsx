import { Helmet } from "react-helmet";
import NewsLandingPage from "./elements/NewsLandingPage";
import NewsTrending from "./elements/NewsTrending"

const NewsMain = () =>{
    return (
      <div className="grid lg:gap-y-16">
        <Helmet> 
            <title>Berita Terbaru HMIF</title>
        </Helmet>

        <NewsLandingPage/>
        <NewsTrending/>
      </div>

    )
}
export default NewsMain;