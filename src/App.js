import './App.css';
import Card from './Moviecard'

function App() {
  const Moviedata =[{title:"Beast",CBFC:"U/A",genere:"2022 ‧ Action/Dark comedy",
  synopsis:"A jaded former intelligence agent is pulled back into action when an attack at a mall creates a tense hostage situation.",
pic:"https://www.mirchi9.com/wp-content/uploads/2022/04/Vijay-Beast-Telugu-Movie-Review.jpg"},
{
  title:"Salute",CBFC:"U/A",genere:"2022 ‧ Crime/Thriller ",
  synopsis:"Salute is a 2022 Indian Malayalam-language crime thriller film, directed by Rosshan Andrrews and written by Bobby-Sanjay starring Dulquer Salmaan in the lead role as a cop",
  pic:"https://m.media-amazon.com/images/M/MV5BMGYzMWQ1ODMtNmNhZC00OWUyLTgzN2UtZjgxMDEwYjMyZmI4XkEyXkFqcGdeQXVyMTM1MzAzNzUx._V1_.jpg"
},{
  title:"RRR",CBFC:"U/A",genere:" 2022 ‧ Action/Drama ",
  synopsis:"A tale of two legendary revolutionaries and their journey far away from home. After their journey they return home to start fighting back against British colonialists in the 1920s.",
  pic:"https://www.pinkvilla.com/imageresize/_rrr_postponed.jpg?width=752&format=webp&t=pvorg"
},
{
  title:"K.G.F: Chapter 2",CBFC:"U/A",genere:"2022 ‧ Action/Drama",
  synopsis:"The blood-soaked land of Kolar Gold Fields has a new overlord now, Rocky, whose name strikes fear in the heart of his foes. His allies look up to him as their Savior, the government sees him as a threat, and his enemies are clamouring for revenge.",
  pic:"https://m.media-amazon.com/images/M/MV5BMjMwMDgyOGQtMWZjNC00MDUwLTllZDYtZWM3NDBmN2YzNGZmXkEyXkFqcGdeQXVyMTQzNjkzMzEw._V1_.jpg"
}]
  return (
    <div className="App">
     {Moviedata.map((element)=> <Card title={element.title} image={element.pic} rating={element.CBFC} genere={element.genere} synopsis={element.synopsis} />)}
    </div>
  );
}

export default App;
