const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 third-bg py-12 px-5 items-start">
        <div className="grid grid-rows-1 col-span-12 lg:col-span-3 gap-y-5 text-black">
          <div className="bg-red-100">col</div>
          <div className="bg-red-100">col</div>
          <div className="bg-red-100">col</div>
        </div>
        <div className="grid grid-rows-1 col-span-12 lg:col-span-3 gap-y-5 text-black">
          <div className="bg-red-100">col</div>
          <div className="bg-red-100">col</div>
        </div>
        <div className="grid grid-rows-1 col-span-12 lg:col-span-3 gap-y-5 text-black">
          <div className="bg-red-100">col</div>
          <div className="bg-red-100">col</div>
        </div>
        <div className="grid grid-rows-1 col-span-12 lg:col-span-3 gap-y-5 text-black">
          <div className="bg-red-100">col</div>
          <div className="bg-red-100">col</div>
        </div>
      </div>

      <div className="grid grid-rows-12 p-5 text-center items-center justify-center">
        <div>Footer</div>
      </div>
    </>
  );
};

export default Footer;
