
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Moviecard from './components/Moviecard'

import { Route, BrowserRouter as Router , Switch} from 'react-router-dom';
import Movielist from './components/Movielist';
import MovieDesci from './components/MovieDescri';
import { useState } from 'react';
  


function App() {


  const[arr1, setarr1]=useState([{ 
     
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
        ])

        const Add =(film)=> {
          console.log(film)
        };

  return (
    <Router>
    <div className="App">

    <Moviecard add={Add}/>

     <div className="content">
      <Switch>

  
      
         <Route exact path='/' >
       <Movielist  arr={arr1}  add={Add}/>
     </Route>
      
      
     <Route  path='/description/:id'>
       <MovieDesci  arr={arr1} add={Add}/>
     </Route>

      </Switch>
      
  

     </div>
    
    </div>
    </Router>
  );
}

export default App;
