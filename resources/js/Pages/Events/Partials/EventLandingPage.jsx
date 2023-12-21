const EventLandingPage = () => {
    return (
        <div className="col-span-6 bg-gray-100 relative">
            <div className="w-full h-screen rounded-lg">
                <img
                    src="images/asset1.png"
                    className="w-full h-full object-cover rounded-lg"
                    alt="Event Cover"
                />
                <div className="innerShadowCard"></div>
            </div>
            <div className="absolute bottom-4 text-white p-3 text-gray-600">
                <p className="text-3xl xl:text-5xl font-bold">
                    IT DAYS: Infinity to Beyond
                </p>
                <p className="xl:w-[70%] text-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>
            </div>
        </div>
    );
};

export default EventLandingPage;
