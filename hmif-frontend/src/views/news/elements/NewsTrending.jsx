const NewsTrending = () => {
  return (
    <div className="container mx-auto p-8 mt-6 max-w-screen-lg">
      <div>
        <h3>Trending News</h3>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
          <div class="bg-white p-4 rounded-md shadow-md">
            <h2 class="text-lg font-semibold mb-2">Card 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.\</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
          <div class="bg-white p-4 rounded-md shadow-md">
            <h2 class="text-lg font-semibold mb-2">Card 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
          <div class="bg-white p-4 rounded-md shadow-md">
            <h2 class="text-lg font-semibold mb-2">Card 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-8">
          <div class="bg-white p-4 rounded-md shadow-md">
            <h2 class="text-lg font-semibold mb-2">Card 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTrending;
