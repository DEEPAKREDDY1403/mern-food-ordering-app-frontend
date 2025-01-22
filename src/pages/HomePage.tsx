import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () =>{
    return(
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-[30px] font-bold tracking-tight text-orange-600">
                Dig into delicious takeaway today
                </h1>
                <span className="text-x1">Your favorite food is only a click away!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5"></div>
            <img src={landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3x1 tracking-tighter">
                Get your takeaway quicker than ever!
                </span>
                <span>
                Download the cEats App for fast ordering and custom recommendations
                </span>
               < img src={appDownloadImage} />
            </div>
        </div>
    );
};
export default HomePage;