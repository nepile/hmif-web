import CardPengurus from "../../../components/CardPengurus";

function HomeAboutUs() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 flex flex-col py-8 first-bg overflow-x-hidden">
        <p className="ex:text-2xl md:text-3xl">
          Mau <span className="customUnderline">kepoin</span> kita-kita?
        </p>
        <div className="xl:w-[60%] xl:h-[500px] lg:h-[410px] md:w-[70%] md:h-[300px] sm:h-[330px] sms:h-[250px] ex:w-[90%] ex:h-[200px]">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/pahhCxLKTFI?si=Es12O8SsmF8MdYO8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="scroller w-[3000px] ex:h-[300px] md:h-[470px]">
          <div className="scrollerInner h-full flex gap-x-10 whitespace-nowrap">
            <CardPengurus nama="Neville Jeremy Onorato Laia" jabatan="Ketua" />
            <CardPengurus nama="Joan Orlando Purba" jabatan="Wakil Ketua" />
            <CardPengurus
              nama="Raditya Attallashif Rachmadie"
              jabatan="Sekretaris"
            />
            <CardPengurus nama="Robin Hood" jabatan="Bendahara" />
            <CardPengurus nama="Neville Jeremy Onorato Laia" jabatan="Ketua" />
            <CardPengurus nama="Joan Orlando Purba" jabatan="Wakil Ketua" />
            <CardPengurus
              nama="Raditya Attallashif Rachmadie"
              jabatan="Sekretaris"
            />
            <CardPengurus nama="Robin Hood" jabatan="Bendahara" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeAboutUs;
