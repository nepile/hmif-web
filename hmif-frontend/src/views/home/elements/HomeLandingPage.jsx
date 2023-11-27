function HomeLandingPage() {
  return (
    <>
      <div className="flex justify-center py-16 bg-radial-gradient">
        <div className="w-[1300px] grid grid-cols-12 justify-between items-center">
          <div data-aos="fade-up" className="col-span-6">
            <p className="text-2xl first-color">Universitas Sanata Dharma</p>
            <h1 className="text-xl font-bold lg:text-5xl my-4">
              Dinamika Bersama{" "}
              <span className="customUnderline2">
                Himpunan Mahasiswa Informatika
              </span>
            </h1>
            <p className="w-[500px] text-lg my-10">
              Website{" "}
              <span className="customUnderline2">
                Himpunan Mahasiswa Informatika
              </span>{" "}
              bertujuan untuk menampung aspirasi Mahasiswa Informatika dan
              informasi seputar kegiatan-kegiatan yang akan dilaksanakan.
            </p>
            <div>
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
          <div data-aos="fade-zoom-in" className="col-span-6">
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
