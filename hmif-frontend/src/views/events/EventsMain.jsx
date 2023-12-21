import { Helmet } from "react-helmet";
import EventsLandingPage from "./elements/EventsLandingPage"
import EventsList from "./elements/EventsList"

const EventsMain = () => {
    return (
        <div className="">
            <Helmet> 
                <title>Events Terbaru HMIF</title>
            </Helmet>

            <EventsLandingPage/>
            <EventsList/>
        </div>

    )

}

export default EventsMain