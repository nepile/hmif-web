function Header() {
    return(
        <div className="flex justify-between shadow-sm items-center bg-white px-8 p-5">
            <div>
                <h1 className="h1 text-xl font-bold">HMIF</h1>
            </div>
            <div className="text-lg gap-x-10 hidden md:flex">
                <a href="">Home</a>
                <a href="">Events</a>
                <a href="">News</a>
                <a href="">Aspirations</a>
                <a href="">About Us</a>
            </div>
            <div>
                <button className="bg-gray-800 text-white px-6 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:shadow-outline">
                    Login
                </button>
            </div>
        </div>
    );
}

export default Header;


