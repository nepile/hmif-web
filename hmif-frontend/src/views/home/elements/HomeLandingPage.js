function HomeLandingPage() {
  return (
    <>
      <div className="flex bg-radial-gradient px-6 py-8 justify-between lg:flex-nowrap flex-wrap items-center gap-4 lg:px-14 lg:py-0">
        <div data-aos="fade-up" className="w-100 lg:w-1/2">
          <p className="text-lg mb-1 first-color">Universitas Sanata Dharma</p>
          <h1 className="text-3xl font-bold lg:text-5xl mb-3">
            Dinamika Bersama Himpunan Mahasiswa Informatika
          </h1>
          <p className="w-80 text-sm mb-8">
            Website Himpunan Mahasiswa Informatika bertujuan untuk menampung
            aspirasi Mahasiswa Informatika dan informasi seputar
            kegiatan-kegiatan yang akan dilaksanakan.
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

        <div data-aos="fade-zoom-inn">
          <img
            src="/images/asset1.png"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          ></img>
        </div>
      </div>
    </>
  );
}

export default HomeLandingPage;
