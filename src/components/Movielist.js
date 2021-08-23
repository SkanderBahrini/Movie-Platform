
import { Card , CardGroup} from 'react-bootstrap'



import {Link} from 'react-router-dom'
import MovieDesci from './MovieDescri';




const Movielist = ({arr}) => {

  console.log(arr)

   

    return (  


        <div className="movie">

            <div className="container">
{/* card  */}
<CardGroup>
  
  {

      arr.map((film) =>

           
         <div className="filmdetails" key={film.id}>
      
           <Link to={`/description/${film.id}`}>
      
           <Card>
    <Card.Img variant="top" src={film.poster} />
    <Card.Body>
      <Card.Title>{film.name}</Card.Title>
      <Card.Text>
       {film.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{film.rating}</small>
    </Card.Footer>
  </Card> 
           </Link> 
            </div> ) }
          </CardGroup>

         </div>

    </div>
    

  
    );
}
 
export default Movielist;