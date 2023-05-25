import { useParams } from "react-router-dom"

const ViewDetails=()=>{
    const params =useParams();

    return(
        <div>
            VIew details---{params.id}
        </div>
    )
}
export default ViewDetails