function HomeLandingPage() {
  return (
    <>
      <div className="flex justify-center items-center flex-col lg:py-16 py-32 bg-radial-gradient">
        <div className="w-[90%] md:flex md:flex-col lg:grid grid-cols-12 justify-between items-center">
          <div
            data-aos="fade-up"
            className="lg:block lg:col-span-6 md:w-[80%] md:flex md:flex-col md:items-center col-span-12"
          >
            <p className="text-2xl first-color">Universitas Sanata Dharma</p>
            <h1 className="text-5xl md:text-center lg:text-start font-bold lg:text-5xl my-4">
              Dinamika Bersama{" "}
              <span className="customUnderline2">
                Himpunan Mahasiswa Informatika
              </span>
            </h1>
            <p className="lg:w-[500px] text-lg md:text-center lg:text-start">
              Website{" "}
              <span className="customUnderline2">
                Himpunan Mahasiswa Informatika
              </span>{" "}
              bertujuan untuk menampung aspirasi Mahasiswa Informatika dan
              informasi seputar kegiatan-kegiatan yang akan dilaksanakan.
            </p>
            <div className="mt-10">
              <a
                href="events"
                className="first-bg text-lg font-bold px-5 py-3 rounded-md me-3"
              >
                Our Events
              </a>
              <a href="about" className="px-5 text-lg py-2 rounded-md">
                About Us
              </a>
            </div>
          </div>
          <div
            data-aos="fade-zoom-in"
            className="lg:col-span-6 md:col-span-6 sm:col-span-8 ex:col-span-12 lg:pt-0 pt-10"
          >
            <img
              className="w-full"
              src="/images/asset1.png"
              alt="Himpunan Mahasiswa Informatika"
            ></img>
          </div>
        </div>
        <div className="w-[90%] grid lg:items-end grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-100 p-10 rounded-sm">
          <div className="mb-5">
            <p className="text-4xl font-bold">Bersinergi Bersama</p>
            <p className="text-2xl first-color">
              Instansi dan Organisasi terkait.
            </p>
          </div>

          <div className="w-[90%] grid grid-cols-3 gap-10 mt-5">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/id/thumb/7/7a/USD_LOGO.svg/1200px-USD_LOGO.svg.png"
                className="w-full h-full object-cover"
                alt="USD Logo"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/images/bemfst_logo.png"
                className="w-full h-full object-cover"
                alt="BEMFST Logo"
              />
            </div>
            <div className="aspect-w-1 aspect-h-1">
              <img
                src="/images/logo.png"
                className="w-full h-full object-cover"
                alt="Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLandingPage;
