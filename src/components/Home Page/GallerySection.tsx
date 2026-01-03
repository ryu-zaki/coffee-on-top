import PageMarker from "../PageMarker";
import PageTitle from "../PageTitle";

const GallerySection = () => {

    return (
        <div className="relative flex flex-col items-center">

          <div className="absolute -top-14 w-screen h-full bg-(image:--gradient-gallery) -z-10 rounded-full rounded-b-none scale-x-[1.25] scale-y-[1.25] origin-top md:-top-22  lg:-top-32 lg:rounded-t-[9999999em] lg:scale-x-[1.19] xl:scale-x-[1.2] xl:scale-y-[1.5]">
             
            <img src="assets/bean-bg.png" className="absolute object-cover -top-14 -left-10 w-[15em] md:left-5 md:-top-16 md:w-[22em] lg:w-[22em] lg:left-20 lg:-top-8 xl:w-[20em] xl:left-32 xl:top-5 2xl:w-[28em]" />

          </div>

          <div className="text-center flex flex-col items-center gap-3 xl:gap-6">
           <PageMarker sectionCategory="Gallery" />
           <PageTitle title={"brews & moments"}  />
          </div>

          <div className="mt-5 xs:mt-10 lg:w-[90%] xl:w-[80%]">
             <div className="grid relative grid-cols-2 gap-2 mb-5 lg:grid-cols-3">
                <div className="bg-white p-2 rounded-md lg:rounded-xl"><img className="w-full h-full object-cover lg:rounded-md" src="assets/gallery/image 1.png" alt="" /></div>
                <div className="bg-white p-2 rounded-md lg:col-start-2 lg:row-start-1 lg:rounded-xl"><img className="w-full h-full object-cover lg:rounded-md" src="assets/gallery/image 2.png" alt-="" /></div>
                <div className="relative before:hidden col-span-2 bg-white p-2 rounded-md before:absolute before:inset-2 before:bg-img-overlay before lg:before:block lg:rounded-xl">
                  <GalleryDescription visibility={"hidden lg:block"} />
                  <img className="h-full w-full object-cover lg:rounded-md" src="assets/gallery/image 3.png" alt="" /></div>
                <div className="col-start-2 row-start-1 row-span-2 bg-white p-2 rounded-md lg:col-start-3 lg:rounded-xl"><img className="lg:rounded-md" src="assets/gallery/image 4.png" alt="" /></div>
                
                
             </div>

             <GalleryDescription visibility={"lg:hidden"} />
          </div> 
        </div>
        
    )
}

const GalleryDescription: React.FC<{ visibility?: string }> = ({ visibility }) => {

    return (
      <div className={`${visibility} lg:absolute lg:bottom-4 lg:p-4`}>
        <p className={`sm:text-lg  lg:text-white`}>Our success is rooted in the trust of our customers and the support of the community, and we continue to rise by staying true to what matters most: great coffee and meaningful experiences.</p>
      </div>
        
    )
}

export default GallerySection;