import App from './App.css';
import {Link} from 'react-router-dom';
import {useState ,useEffect} from "react";

// Albums function
function Albums(){
    // using use state saving the state of the component
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(true);
    const [error,setError] = useState(null);
    
    // when value change useEffect call 
    useEffect(()=>{
   async function getData(){
   const response = await fetch(`https://jsonplaceholder.typicode.com/albums`)
        .then((response)=> {
           if(!response) {
            throw new Error(
                `This is an HTTP ERROR: ${response.status}`
            )}         
           return response.json();
        })
      
        .then((actualData) => {
            setdata(actualData);
            setError(null);
            console.log(actualData);
        })
        .catch((error) =>{
           setError(error.message);
           setdata(null);
        })
        .finally(() => {
            setloading(false);
        })
    }
        getData();

    },[]);

    

    return(
      <div id='main'>
     <div id='main1'>
     <h1 id='al'>Albums Collection App</h1>
     <div id = 'rout'>  <Link id="lin" to="/">Home</Link><p id="line"></p> <Link  id="lin" to="/Post">Post</Link> <p id="line"></p> <Link  id="lin" to="/Delete">Delete</Link> <p id="line"></p><Link id="lin" to="/Update">Update</Link></div>
     {loading && <div>A moment please...</div>}
     {error &&(
        <div>{`There is a problem fetching the post data - ${error}`}</div>
 )}
<ul>
    {/* using map function to display all value */}
    {data && data.map(({id, title})=>(
     <div id='container'>
   
      <div id='flex'> <img id='img1' src='https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/70/77/c2/7077c2c4-4f72-f331-7711-84b71784327c/e182d977-2e00-48bf-88e4-6c110f373155_en-iphoneX-1.png/462x1000bb.png'></img>
        <h2 id='title'>{title}</h2>
      </div>
  
    </div>
    ))}
</ul>
     </div>
      </div>
    )
    
}

// export default to use in another module
export default Albums;