import  {navigations} from "../data/navigations";
const Footer = () => {

    return (
        <div className="relative mt-60 flex flex-col items-center sm:text-lg">
           <div className="absolute md:container bg-white rounded-md shadow-card top-0 -translate-y-1/2 p-7 mx-2 lg:p-12 xl:leading-9">
             <h2 className="text-lg font-semibold mb-2 sm:text-xl">Our journey to success</h2>
             <p>From humble beginnings to a beloved community spot, our café has grown through passion, consistency, and genuine connection. Every cup we serve reflects our commitment to quality—crafted with carefully selected ingredients, brewed with care, and delivered with a smile. What began as a simple idea has become a thriving space where people gather to study, relax, and share stories.</p>
           </div>

           <div className="bg-brown-normal w-full pt-60 pb-10 text-white sm:pt-42 md:pt-52 md:pb-20">
            <div className="md:container md:flex md:items-start md:mx-auto md:justify-start lg:gap-32 xl:gap-64 2xl:gap-[30em]">
               <div>  
                 <div className="flex flex-col items-center md:items-start">
                     <div className="flex flex-col items-center gap-2 md:flex-row lg:mb-2 xl:gap-4 xl:mb-3"> <img className="w-6" src="assets/bean-dark.png" alt="" /> <h3 className="font-semibold xl:text-xl">Coffee On Top</h3></div>
                     <p className="">Thank you for visiting our website!</p> 
                 </div>

                 <ul className="flex flex-col items-center mt-5 gap-2 md:items-start xl:mt-8 xl:gap-4">
                    <li className="flex items-center gap-2 xl:gap-4">
                        <img className="w-5" src="assets/marker light.png" alt="" />
                        <p>Pechayan street sitio 4, Caloocan</p>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-4">
                        <img className="w-5" src="assets/envelope light.png" alt="" />
                        <p>coffeeontop@gmail.com</p>
                    </li>
                    <li className="flex items-center gap-2 xl:gap-4">
                        <img className="w-5" src="assets/phone light.png" alt="" />
                        <p>09874456562</p>
                    </li>
                 </ul>
               </div>
               
               <div className="flex flex-col gap-10 items-center mt-10 text-center sm:flex-row sm:justify-center sm:gap-20 sm:items-start md:gap-10 md:mt-0 md:text-left lg:gap-18 2xl:gap-[6em]">
                {
                    navigations.map(({name, subNavs}, index) => {
                        return (
                           <ul key={index} className="flex flex-col gap-2">
                              <li className="font-semibold mb-2 xl:text-xl">{name}</li>
                              {
                                subNavs.map((nav, index) => <li className="md:text-base xl:text-lg" key={index}>{nav }</li>)
                              }
                           </ul>
                        )
                    })
                }
                
               </div>
               </div>
           </div>
           
           <div className="bg-brown-dark w-full text-white text-sm text-center py-2 px-2 md:text-base md:py-3">
            <p>© 2022 coffeeontop@gmail.com. All Rights Reserved</p>
           </div>
        </div>
    )
}

export default Footer;