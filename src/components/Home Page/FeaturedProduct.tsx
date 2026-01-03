import PageMarker from "../PageMarker";
import PageTitle from "../PageTitle";

const FeaturedProduct = () => {

    return (
    <div> 
        <div className={"flex flex-col gap-3 items-center mb-10 xs:mb-14 lg:mb-18"}>
            <PageMarker sectionCategory={"Feature"}  />
            <PageTitle title={"Coffee Based Frappe"} />
        </div>

        <div className="flex flex-col items-center gap-20 lg:flex-row lg:gap-10">
            <div className="flex flex-col items-center relative before:absolute before:w-[90%] before:aspect-square before:bg-(image:--gradient-circle) before:-z-10 before:rounded-full before:bottom-0 xs:w-[25em] md:w-[30em] lg:w-full lg:min-w-[28em] lg:before:shadow-solid xl:min-w-[35em]">
                <img className="absolute -top-12 -left-20 opacity-45 -z-10 xs:w-[25em] xs:-left-32 md:w-[35em] md:-left-52 md:-top-20 lg:w-[25em] lg:-left-20 xl:w-[30em] xl:-left-38 xl:-top-40" src="assets/featured/bean bg.png" alt="" />
                <img className="max-w-[30em] w-[85%]" src="assets/featured/triple mocha.png" alt="" />
            </div>

            <div className="relative">
                <img className="absolute -top-[11em] -right-32 -z-10 opacity-25 xs:w-[25em] md:w-[30em] md:-top-[15em] lg:top-auto lg:-bottom-20 lg:w-[25em] lg:-right-32 xl:w-[30em] xl:-right-32 2xl:-bottom-[5em] 2xl:-right-64" src="assets/featured/coffee splash.png" alt="" />
                <h3 className="font-semibold text-xl lg:text-2xl xl:text-3xl">Triple Mocha</h3>
                <p className="font-poppins mt-2 before:hidden sm:text-lg lg:pb-5 lg:relative lg:before:block lg:before:bg-brown-dark lg:before:h-0.75 lg:before:w-full lg:before:bottom-0 lg:before:absolute xl:leading-8">A bold fusion of three irresistable mocha layers crafted to satisfy every chocolate lover. This frappe blends rich espresso, premium cocoa, and velvety chocolate syrup into an ice-cold, creamy drink with a perfectly balanced sweetness</p>
                <div className="mt-10 w-full pl-5 flex flex-col gap-10">
                  <div className="flex w-full gap-5 items-center">
                    <div className="shadow-card grow w-20 aspect-square relative rounded-full xl:w-24">
                      <img className="absolute w-[85%] -tfop-[1em  ] -left-2" src="assets/featured/chocolate bar.png" alt="" />
                    </div>
                    
                    <p className="w-full sm:text-lg">Triple-Threat Mocha Profile</p>
                  </div>

                  <div className="flex w-full gap-5 items-center">
                    <div className="shadow-card grow w-20 aspect-square relative rounded-full xl:w-24">
                      <img className="absolute w-[85%] -top-[.5em] -left-1" src="assets/featured/sparkle.png" alt="" />
                    </div>
                    
                    <p className="w-full sm:text-lg">Balanced Texture & Craftsmanship</p>
                  </div>
                </div>

                <div className="w-full flex justify-between font-montserrat items-end mt-10">
                  <h3 className="text-xl font-semibold sm:text-2xl">PRICE</h3>
                  <h3 className="text-lg font-semibold text-orange sm:text-xl">₱110.00</h3>
                </div>
            </div>
        </div>
    </div>
    )
}

export default FeaturedProduct;