import { useEffect , useState } from 'react';
import './QuoteGenerator.css'



const QuoteGenerator = () => {
  
   const [data , setData]  = useState([])

       const URL =`https://pokeapi.co/api/v2/pokemon/pikachu` 
       const URLwitherror =`https://pokeapi.co/api/v2/pokemon/pookie` //for debuging

// //   const URL2 ='https://linkedin-data-api.p.rapidapi.com/profiles/position-skills?username=tedgaubert'
  


// ------------------- ASYNC & AWAIT -TRY & CATCH block ----------------------------------
// getdata(); //caling

  // async function getdata () {
  //    try{const response = await fetch(URL);
     
  //     if(!response.ok){ // .ok comes from unparsedata => here 1st check is data cming if not okey error
  //       throw new Error("could not fetch data ")
  //     }
    
  //   const parseData = await  response.json();
     
  //   console.log(response);
  //   console.log(parseData);
  //   }
  //   catch(error){
  //       console.log(error);
  //   }
  
  // }
  
     
// ------------------- useeffect - ASYNC & AWAIT ----------------------------------

// useEffect( () => {
//      const fetchdata = async () =>{
//       const data = await fetch(URL);
//       const response = await data.json();
//       console.log(response);
//     } 
//      fetchdata()
// },
//  {}); // blank for call only once on start 



// ------------------- .THEN & .CATCH----------------------------------

// useEffect( ()=> {
//    fetch(URL)
//   .then( response => response.json())
// //.then(parsedata => console.log(parsedata))
//  .then(data => setData(data))
//  .catch( error => console.log("error occured" , error));
// },[]);
 
 // ------------------- 2nd way of writing THEN & .CATCH---------------------------------- 
let final

 useEffect( ()=>{ 
  fetch(URL)

   .then( (response) =>  response.json())

   .then( (parsedData) => {
    console.log(parsedData);
    setData(parsedData);   //IMP 
   })
    
   .catch((error) => console.log('Fetch data error' , error));

},[]);

  data.forEach(function (element)  {
   console.log("hi there")
    
  });
  


    return (
        <>
        <div className="container"> 
            <p> Quote Generator </p>
            <h1>data</h1>
            <ul>
              {Object.entries(data).map(([key, value]) => (
  <li key={key}>{key}: {JSON.stringify(value)}</li>
))};
               {/* {data.map( (post) => (
                <li key={post.id}> {post.name}</li>
               ))} */}
              </ul>          
        <div className="quote">its goodmorning  </div>

        </div>
        
        </>
    )
}
export default QuoteGenerator;

