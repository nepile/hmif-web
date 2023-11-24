import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <Helmet>
        <title>ASEK</title>
      </Helmet>

      <div className="flex justify-between lg:flex-nowrap flex-wrap items-center gap-4 lg:px-14">
        <div className="w-100 lg:w-1/2">
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

        <div>
          <img
            src="/images/asset1.png"
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
