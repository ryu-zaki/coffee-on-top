import metrics from "../../data/metrics";
import PageMarker from "../PageMarker";
import PageTitle from "../PageTitle";

const MetricsSection = () => {

    return (
        <>
         <div>
            <div className="flex flex-col gap-3 items-center xl:gap-y-6">
                <PageMarker sectionCategory={"Metrics"} />
                <PageTitle title="Our Impact and Scale" />
            </div>
               
               <div className="relative flex justify-center items-center overflow-visible w-full mt-10 px-2 py-20 md:py-32 xl:py-48">
                <img className="absolute -z-10 left-0 w-screen h-full" src="assets/scrap paper bg.png" alt="" />
                <img className="absolute opacity-25 z-0 -right-24 w-[18em] md:w-[23em] md:-right-32 xl:w-[30em] xl:-right-40 2xl:w-[35em] 2xl:-right-28" src="assets/featured/bean bg.png" alt="" />
                
               <div className="flex container flex-wrap items-center justify-center text-center relative gap-x-8 gap-y-10 h-full md:gap-x-12 xl:gap-x-24">
                <img className="absolute -top-32 -left-5 w-[7em] md:w-[10em] md:-top-42 xl:w-[15em] xl:-top-70 xl:left-10 2xl:w-[18em] 2xl:-top-[19em]" src="assets/bean sack.png" alt="" />
                    {
                metrics.map(({name, category}, index) => {
                    return <div className="relative font-semibold z-10 h-full before:hidden before:h-full before:bg-brown-normal before:w-1 before:absolute before:left-0 lg:pl-5 lg:flex lg:flex-start lg:flex-col lg:items-start lg:before:block" key={index}>
                        <h3 className="sm:text-lg lg:text-2xl xl:text-4xl">{name}</h3>
                        <p className="bg-white text-orange text-sm px-4 py-1 rounded-full mt-2 sm:text-base lg:px-6 lg:py-2 xl:mt-3 2xl:text-lg">{category}</p>
                    </div>
                })
               } 
               </div>
               
            </div>
            
        </div>
        </>
        
    )
}

export default MetricsSection;