import metrics from "../../data/metrics";
import PageMarker from "../PageMarker";
import PageTitle from "../PageTitle";

const MetricsSection = () => {

    return (
        <div>
            <div>
                <PageMarker sectionCategory={"Metrics"} />
                <PageTitle title="Our Impact and Scale" />
            </div>

            <div>
               <img src="assets/bean sack.png" alt="" />
               <img src="assets/scrap paper bg.png" alt="" />
               <img src="assets/featured/bean bg.png" />

               {
                metrics.map(({name, category}, index) => {
                    return <div key={index}>
                        <h3>{name}</h3>
                        <p>{category}</p>
                    </div>
                })
               } 
            </div>
        </div>
    )
}

export default MetricsSection;