const CreateMetric = (name: string, category: string) => {

    return ({
       name, category
    })
}

const metrics = [
    CreateMetric("2yrs", "Experience"),
    CreateMetric("1M+", "Happy Customers"),
    CreateMetric("84", "Local Branches"),
    CreateMetric("1k", "Products Available")
]; 

export default metrics;