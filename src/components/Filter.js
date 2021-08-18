import { Card , Form, Button, FormControl, CardGroup, Row ,Col} from 'react-bootstrap';

import { useState } from 'react';
import { useRef } from 'react';
const Filter = (props) => {

  const[ search, setsearch]= useState('');

  const searchref= useRef();

  const[bool, setbool]=useState(false)

  const handlesubmit=()=> {
      
    setbool(true)

  }

  const arr1 = props.arr1;

   


      

    return (

     
        <div className="filter">
            <div className="container">
          
  
         
      <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        value={search}
        ref= {searchref}
       onChange={(e) => setsearch(searchref.current.value)}
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success" onClick={handlesubmit}>Search</Button>
</Form> 

<br/>

 {bool && arr1.filter((film) => { return film.name.toLowerCase().includes(search.toLowerCase()); }).map((film) => 
        <CardGroup >
            <Row>
                <Col>
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
  </Col>
  </Row>
</CardGroup>) }


 {bool && arr1.filter((film) => { return film.rating === search}).map((film) => 
        <CardGroup >
            <Row>
                <Col>
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
  </Col>
  </Row>
</CardGroup>) }
        </div>
        </div>
      );
}
 
export default Filter;