const HomeNews = () => {
  return (
    <>
      <div className="grid gap-y-5 px-6 py-8 lg:px-14 lg:py-0 mb-20">
        <div>
          <div className="bg-gray-100 mb-2">this is banner 1</div>
          <div className="bg-gray-100">this is banner 2</div>
        </div>

        <div className="grid grid-cols-12 gap-5 h-80">
          <div className="col-span-4 bg-gray-100">col</div>
          <div className="col-span-4 bg-gray-100">col</div>
          <div className="col-span-4 bg-gray-100">col</div>
        </div>

        <div className="bg-gray-100">pagination</div>
      </div>
    </>
  );
};

export default HomeNews;
