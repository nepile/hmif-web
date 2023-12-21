const NewsLandingPage = () => {
  return (
    <div class="container grid lg:grid-cols-12 flex gap-7 mx-auto p-8 flex items-center mt-32 max-w-screen-xl">
      <div className="col-span-6 bg-gray-100">
        <div className="w-full h-80 rounded-lg bg-gray-600">
          <img
            src="images/itdaysdummy.jpg"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="col-span-6">
        <div className="grid grid-cols-12 grid-rows-2 gap-7 w-full lg:h-80">
          <div className="col-span-12 lg:col-span-6 bg-gray-100 rounded-lg row-span-1">
            <img
              src="images/itdaysdummy.jpg"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 bg-gray-100 rounded-lg row-span-1">
            <img
              src="images/itdaysdummy.jpg"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 bg-gray-100 rounded-lg row-span-1">
            <img
              src="images/itdaysdummy.jpg"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 bg-gray-100 rounded-lg row-span-1">
            <img
              src="images/itdaysdummy.jpg"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsLandingPage;
