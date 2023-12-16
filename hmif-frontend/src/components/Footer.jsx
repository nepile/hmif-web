const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 lg:gap-y-0 gap-y-10 third-bg py-12 px-5 items-start">
        <div className="grid font-thin text-white grid-rows-1 col-span-12 lg:col-span-4 gap-y-5 text-black">
          <div className="flex items-center gap-x-2">
            <img src="images/logo.png" className="w-20 h-20" />
            <div className="font-bold">
              <p className="text-2xl">HMIF 2023/2024</p>
              <p>Universitas Sanata Dharma</p>
            </div>
          </div>
          <div className="w-[80%]">
            <p>
              Jl. Paingan, Krodan, Maguwoharjo, Kec. Depok, Kabupaten Sleman,
              Daerah Istimewa Yogyakarta 55281
            </p>
          </div>
          <div className="flex items-center">
            <ion-icon name="mail-outline"></ion-icon>
            <p className="px-2">itdayssanatadharma@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-rows-1 text-white col-span-12 lg:col-span-3 gap-y-5 text-black">
          <div>
            <p className="text-2xl">Navigasi</p>
          </div>
          <div>
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/events">Events</a>
            </p>
            <p>
              <a href="/news">News</a>
            </p>
            <p>
              <a href="/aspirations">Aspirations</a>
            </p>
            <p>
              <a href="/about">About Us</a>
            </p>
          </div>
        </div>
        <div className="grid grid-rows-1 text-white col-span-12 lg:col-span-3 gap-y-5 text-black">
          <div>
            <p className="text-2xl">Tentang</p>
          </div>
          <div>
            <p>
              <a href="/">FAQ</a>
            </p>
            <p>
              <a href="/">Terms & Conditions</a>
            </p>
            <p>
              <a href="/">Privacy Policy</a>
            </p>
          </div>
        </div>
        <div className="grid text-white grid-rows-1 col-span-12 lg:col-span-2 gap-y-5 text-black">
          <div>
            <p className="text-2xl">Social Media</p>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <ion-icon name="logo-instagram"></ion-icon>
              <a target="blank" href="https://www.instagram.com/hmif.usd/">
                Instagram
              </a>
            </div>
            <div className="flex items-center gap-x-2">
              <ion-icon name="logo-linkedin"></ion-icon>
              <a
                target="blank"
                href="https://www.linkedin.com/company/himpunan-mahasiswa-informatika-usd/mycompany/"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-x-2">
              <ion-icon name="logo-youtube"></ion-icon>
              <a target="blank" href="https://www.youtube.com/@hmifusd3290">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-12 p-5 bg-gray-900 text-white text-center items-center justify-center">
        <div>Copyright &copy; HMIF {new Date().getFullYear()}</div>
        <div>Departemen Media Informasi | Biro Web holder</div>
      </div>
    </>
  );
};

export default Footer;
