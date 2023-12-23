const AboutUsContent = () => {
    return (
        <div className="isi-content w-full mx-auto px-6 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mb-10 mt-10">
            {/* Visi Misi Section */}
            <div className="flex flex-col md:flex-row items-center md:space-x-10">
                <div className="visi-teks md:w-1/2">
                    <h2 className="text-3xl">Visi Misi</h2>
                    <span className="content-line my-4 block w-16 h-1 bg-gray-500"></span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                        excepturi molestias quod quibusdam id, odit similique aut
                        explicabo sunt veniam iusto, quis corporis totam consequatur
                        velit illo quia omnis distinctio.
                    </p>
                </div>
                <div className="md:w-1/2 mt-10">
                    <img
                        src="images/itdaysdummy.jpg"
                        className="w-full md:w-auto h-auto"
                        alt="Visi Misi Image"
                    />
                </div>
            </div>

            {/* Tujuan Section */}
            <div className="flex flex-col-reverse md:flex-row items-center md:space-x-10 mt-10">
                <div className="md:w-1/2 mt-10">
                    <img
                        src="images/itdaysdummy.jpg"
                        className="w-full md:w-auto h-auto"
                        alt="Tujuan Image"
                    />
                </div>
                <div className="tujuan-teks md:w-1/2">
                    <h2 className="text-3xl">Tujuan</h2>
                    <span className="content-line my-4 block w-16 h-1 bg-gray-500"></span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                        commodi eaque, dolores tenetur voluptatum illum modi! Doloremque,
                        animi voluptatibus obcaecati officia voluptate provident itaque,
                        iusto eos eaque soluta culpa suscipit?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsContent;

