import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';

// function create
function Post() {
  // using hook useState to create a new instanceof data
  const [data,setdata] = useState(null);

  useEffect(()=>{
 fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    
            title: 'This is a post',
            body:'This is a post',
            userId: 1,
        }),
        headers:{
            'Content-type': 'application/json; charset=utf-8',
        },
     })
     .then((response) => response.json())
     .then((json) => {
     setdata(json.body)
     console.log(json.body);
      
     })
    
     console.log("product created successfully");
    },[]);
  return (
    <div id='main'>
    <div id='main1'>
    <h1 id='al'>Albums Collection App Post</h1>
    <div id = 'rout'>  <Link id="lin" to="/">Home</Link><p id="line"></p> <Link  id="lin" to="/Post">Post</Link> <p id="line"></p> <Link  id="lin" to="/Delete">Delete</Link> <p id="line"></p><Link id="lin" to="/Update">Update</Link></div>
   
<ul>
 
    <div id='container'>
  
     <div id='flex'> <img id='img1' src='https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/70/77/c2/7077c2c4-4f72-f331-7711-84b71784327c/e182d977-2e00-48bf-88e4-6c110f373155_en-iphoneX-1.png/462x1000bb.png'></img>
       <h2 id='title'>{data}</h2>
     </div>
 
   </div>
  
</ul>
    </div>
     </div>
   

     
   
    
  )
}

// export default to use in another module
export default Post;