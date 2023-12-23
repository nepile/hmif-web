const AboutUsLandingPage = () => {
  return (
      <div>
          <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-slate-600 h-[500px]">
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  About Us
              </h1>
          </div>

          <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mb-10">
              <div className="text-center">
                  <div className="block relative rounded-lg bg-red-600 mt-[-130px]">
                      <div className="w-full h-96 rounded-lg overflow-hidden relative z-[1]">
                          <img
                              src="images/itdaysdummy.jpg"
                              className="w-full h-full object-cover"
                              alt="IT Days Dummy"
                          />
                      </div>
                  </div>
              </div>
          </div>

          <section className="bg-white mx-auto lg:max-w-4xl xl:max-w-6xl ">
              <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                  <div className="flex flex-wrap justify-around items-center text-black font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                      <div className="text-center mb-4 md:mb-0">
                          <p>30</p>
                          <p>Anggota</p>
                      </div>
                      <div className="text-center mb-4 md:mb-0">
                          <p>5</p>
                          <p>Divisi</p>
                      </div>
                      <div className="text-center mb-4 md:mb-0">
                          <p>4</p>
                          <p>Pengurus Inti</p>
                      </div>
                      <div className="text-center mb-4 md:mb-0">
                          <p>30</p>
                          <p>Ketua</p>
                      </div>
                  </div>
              </div>
              <hr />
          </section>
      </div>
  );
};

export default AboutUsLandingPage;
