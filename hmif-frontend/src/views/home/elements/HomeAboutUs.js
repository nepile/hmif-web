import CardPengurus from "../../../components/CardPengurus";

function HomeAboutUs() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-10 flex flex-col py-8 first-bg">
        <div className="w-[50%] h-10 bg-white"></div>
        <div className="w-[60%] h-[500px] bg-white"></div>
        <div className="w-full h-[470px] grid grid-cols-12 gap-x-10">
          <CardPengurus />
          <CardPengurus />
          <CardPengurus />
          <CardPengurus />
        </div>
      </div>
    </>
  );
}

export default HomeAboutUs;
