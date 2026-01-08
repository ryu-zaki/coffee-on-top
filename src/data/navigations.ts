const CreateNavigation = (name: string, inactiveImage: string, activeImage: string, path:string, subNavs: string[] ) => {
    return ({
        name,
        inactiveImage,
        activeImage,
        path,
        subNavs
    })
}

const navigations = [
    CreateNavigation("Home", "home-dark.png", "home-orange.png", "/", ["Quality", "Home", "Offers", "Service"]),
    CreateNavigation("About", "info-dark.png", "info-orange.png", "/about", ["Quality", "Home", "Offers", "Service"]),
    CreateNavigation("Menu", "utensils-dark.png", "utensils-orange.png", "/menu", ["Quality", "Home", "Offers"]),
    CreateNavigation("Contact", "phone-dark.png", "phone-orange.png", "/contacts", ["Quality", "Home", "Offers"]),
];

export { navigations };