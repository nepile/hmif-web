function HomeLandingPage() {
  return (
    <>
      <div className="flex justify-center lg:py-16 py-44 bg-radial-gradient">
        <div className="w-[90%] grid grid-cols-12 justify-between items-center">
          <div data-aos="fade-up" className="lg:col-span-6 md:col-span-10 col-span-12">
            <p className="text-2xl first-color">Universitas Sanata Dharma</p>
            <h1 className="text-3xl font-bold lg:text-5xl my-4">
              Dinamika Bersama{" "}
              <span className="customUnderline2">
                Himpunan Mahasiswa Informatika
              </span>
            </h1>
            <p className="md:w-[500px] text-lg">
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
          <div data-aos="fade-zoom-in" className="lg:col-span-6 md:col-span-6 sm:col-span-8 ex:col-span-12 lg:pt-0 pt-10">
            <img
              className="w-full"
              src="/images/asset1.png"
              alt="Himpunan Mahasiswa Informatika"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeLandingPage;
