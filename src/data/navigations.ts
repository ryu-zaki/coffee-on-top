const CreateNavigation = (name: string, inactiveImage: string, activeImage: string, path:string ) => {
    return ({
        name,
        inactiveImage,
        activeImage,
        path
    })
}

const navigations = [
    CreateNavigation("Home", "home-dark.png", "home-orange.png", "/"),
    CreateNavigation("About", "info-dark.png", "info-orange.png", "/about"),
    CreateNavigation("Menu", "utensils-dark.png", "utensils-orange.png", "/menu"),
    CreateNavigation("Contact", "phone-dark.png", "phone-orange.png", "/contacts"),
];

export { navigations };