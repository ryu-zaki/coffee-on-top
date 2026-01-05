import PageMarker from "../PageMarker";
import PageTitle from "../PageTitle";
import products from '../../data/bestSellers';
import {Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from "swiper/modules";

const BestSellers = () => {

    return (
        <div className="relative w-full flex flex-col items-center before:absolute before:w-[60%] before:bg-black before:h-0.5 before:bottom-0 pb-10 xl:before:w-[40%]">

           <img className="absolute -z-10 opacity-25 -top-24 -left-52 sm:w-[32em] sm:-left-40 xl:-left-20 2xl:-left-52 2xl:w-[40em]" src={"assets/featured/bean bg.png"} alt="" />

           <div className="flex flex-col items-center gap-3 xl:gap-6">
            <PageMarker sectionCategory={"Products"} />
            <PageTitle title="Our Best Sellers" description="Discover the drinks our customers can’t get enough of. From signature blends to refreshing iced favorites, these handcrafted creations are the heart of Coffee On Top." /> 
           </div>
           
           <div className="w-full lg:hidden">
           <Swiper
           className="w-full mt-10"
           breakpoints={{
            500: {
              slidesPerView: 1.8
            },

            640: {
              slidesPerView: 2.6
            },
           }}
           modules={[EffectCoverflow]}
           effect='coverflow'
           slidesPerView={1.3}
           centeredSlides={true}
           spaceBetween={0}
           grabCursor={true}
           >
              
               {
              products.map((data, index) => {
                return <SwiperSlide
                  key={index}
                  className="w-full"
                >
                  <ProductCard {...data} />
                </SwiperSlide>
              })
             }
           </Swiper>

           </div>
           
           <div className="hidden mt-10 w-11/12 gap-3 lg:flex xl:gap-6 xl:mt-16 xl:w-[80%] 2xl:w-[85%] 2xl:gap-8">
            {
              products.map((data, index) => {
                return <ProductCard {...data} key={index} />
              })
             }
           </div>
             
        </div>
        
    )
}

const ProductCard: React.FC<{ imgSrc: string, category: string, name:string, price: number }> = 
  ({ imgSrc, category, name, price  }) => {

    return (
    <div className="w-full p-3 bg-white rounded-2xl border border-gray-300 lg:p-4 2xl:rounded-3xl">
      <div className="bg-(image:--gradient-circle) aspect-square flex items-center justify-center overflow-hidden relative rounded-md 2xl:rounded-xl">
        <img className="rounded-md w-[80%]" src={`assets/best sellers/${imgSrc}.png`} alt="" />
        <span className="bg-white text-sm px-4 py-1 rounded-full absolute bottom-4 left-4 md:font-semibold lg:text-base lg:px-6">{category}</span>
      </div>

      <div className="mt-5">
        <h3 className="font-bold lg:text-lg 2xl:text-xl">{name}</h3>
        <p className="text-orange font-semibold 2xl:text-lg 2xl:mt-1">₱{price.toFixed(2)}</p>
      </div>
    </div>)
}

export default BestSellers;