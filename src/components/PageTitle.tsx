import React from 'react'

const PageTitle: React.FC<{ title: string }> = ({ title }) => {
   
    
    return (
        <div className="flex flex-col gap-2 items-center text-center">
            <h2 className={"uppercase text-brown-dark text-2xl font-semibold font-montserrat sm:text-3xl lg:text-4xl xl:text-5xl"}>{title}</h2>
            <p className="sm:text-lg">A glimpse into the flavors, faces, and cozy atmosphere that make every visit unforgettable.</p>
        </div >
    )
}

export default PageTitle ;