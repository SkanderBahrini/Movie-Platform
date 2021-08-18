import { Button, Form } from "react-bootstrap";

import { useRef, useState} from "react";

import Movielist from './Movielist'
import Filter from "./Filter";
import {Link} from 'react-router-dom'
const Moviecard = () => {


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
        setbol(true)
       
    })

       const arr1 = [{ 
     
      id:1,
     name:"scream",
     description: " Scream est un film d'horreur américain réalisé par Wes Craven",
     poster: "https://img.filmsactu.net/datas/films/s/c/scream-5/n/scream-5-5e6bae3ea9305.jpg",
     rating:25,
    trailer:"https://www.youtube.com/watch?v=AWm_mkbdpCA&ab_channel=N.B." },
    {   
         id:2,
        name:" 28 jour plus tard",
        description:"28 Jours plus tard (28 Days Later…) est un film d'horreur et de science-fiction post-apocalyptique britannique réalisé par Danny Boyle et écrit par Alex Garland, sorti en 2002.",
         poster: "https://img.filmsactu.net/datas/films/y/e/yesterday/xl/yesterday-5d10c40bdcd52.jpg",
         rating:26,
        trailer: "https://www.youtube.com/watch?v=c7ynwAgQlDQ&ab_channel=BoyleMovieTrailers"},
     {
       id:3,
        name:"rec",
        description:" Rec (typographié [•REC]) est un film d'horreur espagnol",
        poster:"https://fr.web.img2.acsta.net/r_1280_720/medias/nmedia/18/65/21/15/18837368.jpg",
        rating:24,
        trailer:"https://www.youtube.com/watch?v=KLizS5GFBQI&ab_channel=MovieclipsClassicTrailers"
     }   
        ]

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



      <h1> Search for your movie</h1>
       <Filter arr1={arr1}/>
         
         <br/>
         <br/>

          <h1> List of Movies </h1>

          <br/>
          <br/>
     <Movielist film={film}  bol={bol} arr1={arr1} />
     <br/>
     <br/>
        </div>
     );
}
 
export default Moviecard;