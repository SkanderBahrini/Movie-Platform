import { useParams } from "react-router-dom";

const Description = () => {

    


    const {id}= useParams();
    return ( 

        <div className="description">

            Movie Description and Trailer -{id}

         

          


        </div>
     );
}
 
export default Description;