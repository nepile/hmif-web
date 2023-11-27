function HomeUpcomingEvents() {
  return (
    <>
      <div className="flex justify-center pb-16">
        <div className="w-[90%] flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="px-2 text-center">
              <p className="text-4xl font-bold mb-3">
                Upcoming <span className="customUnderline2">Events</span>
              </p>
              <p className="text-lg first-color">
                Ikuti kegiatan dan lomba yang diadakan. Kembangkan skill anda
                disini!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-10 grid-rows-3 gap-7 lg:h-[600px] h-auto mt-14 w-fit">
            <div className="lg:col-span-7 col-span-10 row-span-3 relative">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="images/dummyEvent.png"
                alt=""
              />
              <p className="absolute -top-5 left-5 bg-slate-800 text-white text-center font-bold text-xl p-3 rounded-md">
                Lastest
              </p>
              <p className="absolute -top-5 right-5 bg-slate-800 text-white text-center font-bold text-3xl p-5 rounded-md">
                16 <br /> Sept
              </p>
            </div>
            <div className="lg:col-span-3 col-span-10 flex lg:flex-col md:flex-row flex-col justify-between lg:gap-y-7 gap-7 row-span-1">
              <div className="w-full h-full object-cover relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/dummyEvent.png"
                  alt=""
                />
                <p className="absolute -top-5 right-5 bg-slate-800 text-white text-center font-bold text-xl p-2 rounded-md">
                  16 <br /> Sept
                </p>
              </div>
              <div className="w-full h-full object-cover relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/dummyEvent.png"
                  alt=""
                />
                <p className="absolute -top-5 right-5 bg-slate-800 text-white text-center font-bold text-xl p-2 rounded-md">
                  16 <br /> Sept
                </p>
              </div>
              <div className="w-full h-full object-cover relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/dummyEvent.png"
                  alt=""
                />
                <p className="absolute -top-5 right-5 bg-slate-800 text-white text-center font-bold text-xl p-2 rounded-md">
                  16 <br /> Sept
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeUpcomingEvents;
