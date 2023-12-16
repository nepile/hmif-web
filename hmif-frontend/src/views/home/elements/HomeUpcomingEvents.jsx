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

          <div className="grid grid-cols-10 grid-rows-3 gap-x-7 gap-y-16 lg:gap-y-7 lg:h-[600px] h-auto mt-14 w-fit">
            <a
              href=""
              className="lg:col-span-7 col-span-12 row-span-3 relative"
            >
              <div className="w-full h-full">
                <img
                  className="h-full w-full object-cover rounded-lg"
                  src="images/itdaysdummy.jpg"
                  alt=""
                />
              </div>
              <p className="absolute -top-5 right-2 bg-slate-800 text-white text-center font-bold text-xl p-3 rounded-md">
                16 Nov 2024
              </p>
              <div className="innerShadowCard">
                <div className="absolute px-4 bottom-5 text-start text-light">
                  <strong className="lg:text-4xl text-2xl">
                    IT Days 2024: Infinity to Beyond
                  </strong>
                  <p className="font-thin hidden lg:inline-block">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </a>

            <div className="lg:col-span-3 col-span-12 gap-y-16 lg:gap-y-7 flex lg:flex-col md:flex-row flex-col justify-between lg:gap-y-7 gap-7 row-span-1">
              <a href="" className="w-full h-full row-span-3 relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/porsidummy.jpeg"
                  alt=""
                />
                <p className="absolute -top-5 right-2 bg-slate-800 text-white text-center font-bold text-xl p-3 rounded-md">
                  02 Feb 2024
                </p>
                <div className="innerShadowCard">
                  <div className="absolute px-4 bottom-5 text-start text-light">
                    <strong className="lg:text-lg text-2xl">
                      Porsi 2024: Semangat seni dan olahraga!
                    </strong>
                  </div>
                </div>
              </a>
              <a href="" className="w-full h-full object-cover relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/iasddummy.png"
                  alt=""
                />
                <p className="absolute -top-5 right-2 bg-slate-800 text-white text-center font-bold text-xl p-3 rounded-md">
                  12 Sept 2024
                </p>
                <div className="innerShadowCard">
                  <div className="absolute px-4 bottom-5 text-start text-light">
                    <strong className="lg:text-lg text-2xl">
                      IASD 2024: Perkuat Relasi antar alumni Informatika USD
                    </strong>
                  </div>
                </div>
              </a>
              <a href="" className="w-full h-full object-cover relative">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src="images/ifbelajardummy.jpeg"
                  alt=""
                />
                <p className="absolute -top-5 right-2 bg-slate-800 text-white text-center font-bold text-xl p-3 rounded-md">
                  18 Sept 2024
                </p>
                <div className="innerShadowCard">
                  <div className="absolute px-4 bottom-5 text-start text-light">
                    <strong className="lg:text-lg text-2xl">
                      IF Belajar 2024: Jago Coding Mulai Dari Sekarang!
                    </strong>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeUpcomingEvents;
