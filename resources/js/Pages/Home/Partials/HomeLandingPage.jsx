function HomeLandingPage() {
    return (
        <>
            <div className="flex justify-center items-center flex-col lg:py-16 py-32 bg-radial-gradient">
                <div className="w-[90%] md:flex md:flex-col lg:grid grid-cols-12 justify-between items-center lg:mt-10">
                    <div
                        data-aos="fade-up"
                        className="lg:block lg:col-span-7 md:w-[80%] md:flex md:flex-col md:items-center col-span-12"
                    >
                        <p className="text-2xl first-color mt-4 lg:mt-0">
                            Universitas Sanata Dharma
                        </p>
                        <h1 className="text-5xl md:text-center lg:text-start font-bold my-3">
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
                            bertujuan untuk menampung aspirasi Mahasiswa
                            Informatika dan informasi seputar kegiatan-kegiatan
                            yang akan dilaksanakan.
                        </p>
                        <div className="mt-10">
                            <a
                                href="events"
                                className="first-bg text-lg font-bold px-5 py-3 rounded-md me-3"
                            >
                                Our Events
                            </a>
                            <a
                                href="about"
                                className="px-5 text-lg py-2 rounded-md"
                            >
                                About Us
                            </a>
                        </div>
                    </div>
                    <div
                        data-aos="fade-zoom-in"
                        className="lg:col-span-5 md:col-span-5 sm:col-span-8 ex:col-span-12 lg:pt-0 pt-10"
                    >
                        <img
                            className="w-full object-cover"
                            src="/images/asset1.png"
                            alt="Himpunan Mahasiswa Informatika"
                        ></img>
                    </div>
                </div>

                <div className="w-[100%] lg:w-[90%] md:flex md:flex-col lg:grid grid-cols-12 justify-between lg:items-end gap-10 bg-gray-100 p-10 rounded-sm">
                    <div className="mb-5 col-span-6 lg:text-left text-center">
                        <p className="text-3xl lg:text-4xl font-bold">
                            Bersinergi Bersama
                        </p>
                        <p className="text-xl lg:text-2xl first-color">
                            Instansi dan Organisasi terkait.
                        </p>
                    </div>

                    <a
                        href="https://www.usd.ac.id/"
                        className="grid grid-cols-3 gap-x-7 col-span-6"
                        target="blank"
                    >
                        <div className="w-20 lg:w-32">
                            <img
                                src="/images/usd_logo.png"
                                className="w-full h-full object-cover"
                                alt="USD Logo"
                            />
                        </div>
                        <a
                            href="https://usd.ac.id/mahasiswa/bem/bemfst/"
                            className="w-20 lg:w-32"
                            target="blank"
                        >
                            <img
                                src="/images/bemfst_logo.png"
                                className="w-full h-full object-cover"
                                alt="BEMFST Logo"
                            />
                        </a>
                        <a href="" className="w-20 lg:w-32">
                            <img
                                src="/images/logo.png"
                                className="w-full h-full object-cover"
                                alt="Logo"
                            />
                        </a>
                    </a>
                </div>
            </div>
        </>
    );
}

export default HomeLandingPage;
