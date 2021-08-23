import { Button, Form } from "react-bootstrap";

import { useRef, useState} from "react";

import Movielist from './Movielist'

const Moviecard = ({add}) => {


   const  [name,setname]=useState('');
   const [rating,setrating]=useState('');
   const [poster, setposter]=useState('');
   const [description, setdescription]=useState('');
   const [bol, setbol]= useState(false);

   const refname=useRef();
   const refrating= useRef();
   const refposter = useRef();
   const refdescription= useRef();

   const film= {name, rating, poster, description};


    const handleSubmit = (e => {

        e.preventDefault();
        // setbol(true)
        add(film)
       
    })

   

    return ( 

        <div className="movie">

            <div className="container">

       
                <h1> Add a Movie</h1>
                <br/>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Movie Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" ref={refname}  onChange={(e) => setname(refname.current.value)} />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Rating</Form.Label>
    <Form.Control type="rating" placeholder="Ratings" ref={refrating}  onChange={(e) => setrating(refrating.current.value) }/>
  </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="name" placeholder="Enter name" ref={refdescription}  onChange={(e) => setdescription(refdescription.current.value) } />
    </Form.Group>

           <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Poster</Form.Label>
    <Form.Control type="name" placeholder="Enter name" ref={refposter}  onChange={(e) => setposter(refposter.current.value) }/> 
  </Form.Group>

 
  <Button variant="primary" type="submit" onClick={handleSubmit}>
    Submit
  </Button>
          </Form>
             </div>
  
  <br/>
  <br/>



   
    
     

     <br/>
     <br/>
   
        </div>
     );
}
 
export default Moviecard;