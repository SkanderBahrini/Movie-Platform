
import { Card , CardGroup} from 'react-bootstrap'

import { Route } from 'react-router-dom'

import {Link} from 'react-router-dom'




const Movielist = (props, {match}) => {

  
  
    const bol = props.bol;
    const film = props.film;
    const arr1 = props.arr1;

    return (  


        <div className="movie">

            <div className="container">
{/* card  */}
<CardGroup>
  
  {
      arr1.map((film) =>

           
         <div className="filmdetails" key={film.id}>
      
           <Link to={`/Movie/${film.id}`}>
      
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

             <Route path={`/Movie/:MovieId`}>
        <Movielist/>
      </Route>

       

         </div>
      )
  }
  

  {bol && <Card>
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
  </Card> }
</CardGroup>


     
        </div>
        </div>
    );
}
 
export default Movielist;