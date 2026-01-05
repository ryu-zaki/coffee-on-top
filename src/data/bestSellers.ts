interface ProductType {
    imgSrc: string,
    name: string,
    category: string,
    price: number
}

const CreateProduct = ({imgSrc, name, category, price}: ProductType )  => {
    return ({ imgSrc, name, category, price })
}   

const products = [
  CreateProduct({ imgSrc: "Brownies", name: "Chocolate Brownies", category: "Bites", price: 300 }),
  CreateProduct({ imgSrc: "Cappucino", name: "Americano", category: "Coffee", price: 300 }),
  CreateProduct({ imgSrc: "Sandwich", name: "Chocolate Brownies", category: "Bites", price: 300 })
];

export default products;