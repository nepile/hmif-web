function HomeUpcomingEvents() {
  return (
    <>
      <div className="grid gap-10 flex flex-col px-6 py-8 lg:px-14 lg:py-0">
        <div className="flex flex-col lg:flex-row justify-center lg:items-center">
          <div className="px-2 text-center">
            <p className="text-4xl font-bold mb-3">
              Upcoming{" "}
              <span className="border-b-4 first-border-color">Events</span>
            </p>
            <p className="text-lg first-color">
              Ikuti kegiatan dan lomba yang diadakan. Kembangkan skill anda
              disini!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          <div className="col-span-9 rounded-lg bg-gray-100 h-full flex justify-center items-center">
            core event
          </div>
          <div className="col-span-9 lg:col-span-3 grid grid-row-1 gap-y-5">
            <div className="bg-gray-100 h-48 flex rounded-lg justify-center items-center">
              event1
            </div>
            <div className="bg-gray-100 h-48 flex rounded-lg justify-center items-center">
              event2
            </div>
            <div className="bg-gray-100 h-48 flex rounded-lg justify-center items-center">
              event3
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeUpcomingEvents;
