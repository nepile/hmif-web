import EventLandingPage from "./Partials/EventLandingPage";
import EventList from "./Partials/EventList";
import { Head } from "@inertiajs/react";

const EventMain = () => {
    return (
        <>
            <Head title="Agenda Acara" />

            <EventLandingPage />
            <EventList />
        </>
        // <div className="">
        // </div>
    );
};

export default EventMain;
