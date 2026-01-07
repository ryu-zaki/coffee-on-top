import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
import { useLocation } from "react-router";

const HomePage = () => {
    const {pathname} = useLocation();    

    useGSAP(() => {
      const mm = gsap.matchMedia();
      mm.add({
        isDesktop: '(min-width: 1024px)',
        isMobile: '(max-width: 1023px)'
      }, (context) => {
          const { isMobile, isDesktop } = context.conditions as gsap.Conditions;

            
          const tl = gsap.timeline({ delay: 1,  defaults: {
          duration: .9, opacity: 0,
         }}); 


      tl.from('.main-texts', {
        translateX: '-100px',
        stagger: .15
       })
       
       if (isDesktop) {
         tl.from('.hero-description', {
          translateX: '-100px'
         }, '-=.8')
         .from('.explore-btn', {
          translateX: '-40px',
          duration: .8,
         }, '-=.5')
          .from('.socmed-btns', {
          translateY: '50px', stagger: .2, duration: .6
         }, '-=.2') 
      }

       tl.from('.circled-gradient', {
         scale: .4, duration: .6
       }, '-=1')
       .fromTo('.caramel-cup', {
        translateY: '-100%'
       }, { translateY: "-50%", opacity: 1 }, '-=.5')
       .fromTo('.matcha-cup', {
        translateY: '-100%'
       }, { translateY: "-50%", opacity: 1 }, '-=.6')
        .fromTo('.strawberry-cup', {
        translateY: '-100%'
       },  { translateY: "-50%", opacity: 1 }, '-=.6')
       .from('.circled-logo', {
        scale: .3, duration: .45
       }, '-=.8')
       
       if (isMobile) {
         tl.from('.hero-description', {
          translateX: '-100px'
         }, '-=.8')
          tl.from('.socmed-btns', {
          translateY: '50px', stagger: .2, duration: .6
         }, '-=.5')
         tl.from('.explore-btn', {
          translateX: '-40px',
          duration: .8,
         }, '-=.2') 
      }

      })

      console.log(pathname)
    }, { dependencies: [pathname] })
    
    return (
      <>
        <img className="hidden xl:block w-[28em] absolute top-[20em] -right-[5em] -z-10 2xl:w-[40em] 2xl:top-[25em] 2xl:-right-[18em]" src={"assets/bean-bg.png"}  />  

        <div className="mt-0 lg:h-[80vh] lg:max-h-[50em] relative lg:flex lg:items-center">
           <div className="lg:flex w-full justify-between items-center lg:gap-20 xl:gap-44 xl:items-start xl:mt-[2em]" > 
            
            <CupImages visibility="hidden lg:flex" />
             
             <div className="flex flex-col gap-8 sm:gap-5 xl:gap-10 xl:mt-10 2xl:gap-14">
              <div className="flex flex-col gap-8 lg:gap-0">
                <h1 className="text-3xl font-bold mb-20 font-montserrat xs:mb-32 sm:text-4xl sm:leading-[1.2em] md:text-center md:text-5xl lg:mb-5 lg:text-5xl lg:text-left xl:text-6xl xl:leading-16 xl:mb-8 xl:mt-10 2xl:mt-0 2xl:text-7xl 2xl:leading-18"><span className="block main-texts">Brewed Fresh.</span><span className="block main-texts">Served with Heart.</span> <span className="block main-texts">Always on Top.</span></h1>
               <CupImages visibility="lg:hidden" />
                <p className="hero-description sm:text-lg md:text-center lg:text-left 2xl:text-xl 2xl:leading-10">Experience handcrafted coffee, delicious blends, and the warm ambiance that makes <span className="text-orange font-semibold">every cup feel special</span></p>
              </div>
               

               <div className="flex gap-5 flex-col-reverse xs:flex-row xs:items-center xs:gap-7 md:justify-center lg:justify-start">
                <button className="cursor-pointer explore-btn overflow-hidden relative group flex items-center bg-white rounded-full shadow-card w-fit py-3 font-semibold px-6 gap-5 before:absolute before:w-[.8em] before:aspect-square before:rounded-full before:left-5 before:bg-brown-dark before:z-0 before:transition-all before:duration-700 before:hidden hover:before:scale-[34] xl:before:block xl:pl-12 2xl:text-lg 2xl:pr-8 2xl:py-4">
                    <span className=" duration-300 inline-block relative z-10 group-hover:text-white">Explore Menu</span>
                    <div className="bg-brown-light transition-all rounded-full p-2 group-hover:translate-x-2 group-hover:bg-white"><img className="w-5" src="assets/chevron-dark.png" alt="" /></div>
                </button>

                <div className="flex gap-4">
                  <div  className="group cursor-pointer">
                  <div className="bg-white socmed-btns rounded-full shadow-card p-2 flex justify-center items-center group-hover:animate-bounce xl:p-3 2xl:p-4"><img className="w-[1.2em] 2xl:w-[1.5em]" src="assets/instagram-dark.png" alt="" /></div>
                  </div>

                   <div className="group cursor-pointer">
                    <div className="bg-white socmed-btns rounded-full shadow-card p-2 flex justify-center items-center group-hover:animate-bounce xl:p-3 2xl:p-4"><img className="w-[1.2em] 2xl:w-[1.5em]" src="assets/facebook-dark.png" alt="" /></div>
                   </div>

                   <div className="group cursor-pointer">
                    <div className="bg-white socmed-btns rounded-full shadow-card p-2 flex justify-center items-center group-hover:animate-bounce xl:p-3 2xl:p-4"><img className="w-[1.2em] 2xl:w-[1.5em]" src="assets/tiktok-dark.png" alt="" /></div>
                   </div>
                  
                </div> 
               </div>
             </div>
           </div>
           
           
           {/* Bean Background */}
           <img className="top-24 right-[-7em] -z-10 absolute max-w-[25em] xl:hidden" src={"assets/bean-bg.png"}  />  
        </div> 
        </>
    )
}

const CupImages = ({ visibility }: { visibility?: string }) => {

    return (
      <div className={`${visibility} relative flex justify-center items-center w-11/12 mx-auto max-w-[20em] xl:max-w-[25em] xl:mt-32 2xl:max-w-[33em]`}>
         <img draggable={false} className="caramel-cup absolute z-10 top-[2em] left-0 w-[55%] -translate-y-1/2 rotate-[-10deg] xl:left-5 xl:top-[3em] xl:w-[60%]" src="assets/caramel.png" alt="" />
         <img draggable={false} className="matcha-cup absolute top-[3em] z-20 right-[18%] w-[59%] -translate-y-1/2 rotate-8 xl:top-[4em] xl:right-[5%] xl:rotate-6" src="assets/matcha.png" alt="" />
         <img draggable={false} className="strawberry-cup absolute z-10 top-[6em] -right-[1.5em] w-[56%] -translate-y-1/2 rotate-20 xl:-right-[5.8em] xl:w-[60%] xl:top-[10em] 2xl:-right-[7.5em]" src="assets/strawberry.png" alt="" />
          
          <div className="absolute z-10 circled-logo p-4 shadow-soft w-[45%]  overflow-hidden flex justify-center items-center rounded-full bg-white bottom-0 left-0 xl:left-10 xl:shadow-2xl xl:p-8"> 
           <img draggable={false} className="w-full block" src="assets/business logo.png" alt="" />      
          </div >

         <div className="w-full circled-gradient aspect-square rounded-full bg-(image:--gradient-circle)"></div>
      </div>
    )
}


export default HomePage;