import React from   'react';
import {Link} from 'react-router-dom';

// function create
function Delete(){
     
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      });
      
    return(
      <div id='main'>
      <div id='main1'>
      <h1 id='al'>Albums Collection App Delete</h1>
      <div id = 'rout'>  <Link id="lin" to="/">Home</Link><p id="line"></p> <Link  id="lin" to="/Post">Post</Link> <p id="line"></p> <Link  id="lin" to="/Delete">Delete</Link> <p id="line"></p><Link id="lin" to="/Update">Update</Link></div>
     
  <ul>
   
      <div id='container'>
    
       <div id='flex'> <img id='img1' src='https://is5-ssl.mzstatic.com/image/thumb/PurpleSource124/v4/70/77/c2/7077c2c4-4f72-f331-7711-84b71784327c/e182d977-2e00-48bf-88e4-6c110f373155_en-iphoneX-1.png/462x1000bb.png'></img>
         <h2 id='title'>This is Deleted</h2>
       </div>
   
     </div>
    
  </ul>
      </div>
       </div>
     
    )
}

// export default to use in another module
export default Delete;