const NewsLandingPage = () =>{

    return(
        <div class="container mx-auto p-8 flex mt-32 max-w-screen-xl">
            <div class="berita-utama rounded-lg lg:w-1/2 mr-4 lg:h-3/5">
                <img class="h-full w-full object-cover rounded-lg" src="images/itdaysdummy.jpg" alt="" />
            </div>
        
            <div class="berita-pecahan grid grid-cols-2 gap-2 lg:w-1/2 lg:h-2/6">
                <div class="pecahan-1 rounded-lg lg:h-3/5">
                    <img class="h-full w-full object-cover rounded-lg" src="images/itdaysdummy.jpg" alt="" />
                </div>
                <div class="pecahan-2 rounded-lg lg:h-3/5">
                    <img class="h-full w-full object-cover rounded-lg" src="images/itdaysdummy.jpg" alt="" />
                </div>
                <div class="pecahan-1 rounded-lg lg:h-3/5">
                    <img class="h-full w-full object-cover rounded-lg" src="images/itdaysdummy.jpg" alt="" />
                </div>
                <div class="pecahan-2 rounded-lg lg:h-3/5">
                    <img class="h-full w-full object-cover rounded-lg" src="images/itdaysdummy.jpg" alt="" />
                </div>
            </div>
        </div>
    
    
    )
}
export default NewsLandingPage;