import { useParams } from 'react-router-dom'


const MovieDescri = (props) => {

  const  {id}= useParams();
  const movie = props.arr.find((item)=>{return item.id == id});
  return ( 


    
            <div style={{textAlign:"center"}}>
            <h3>Movie name: {movie.name}</h3>
            <br></br>
            <iframe width="560" height="315" src={movie.trailer} >
             </iframe> 

            </div>

   );
}
 
export default MovieDescri;