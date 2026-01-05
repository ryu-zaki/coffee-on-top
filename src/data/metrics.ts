const CreateMetric = (name: string, category: string) => {

    return ({
       name, category
    })
}

const metrics = [
    CreateMetric("2yrs", "Experience"),
    CreateMetric("1M+", "Experience"),
    CreateMetric("84", "Experience"),
    CreateMetric("2yrs", "Experience")
]; 

export default metrics;