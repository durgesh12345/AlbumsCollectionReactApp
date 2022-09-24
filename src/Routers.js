import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Delete from './Delete';
import Update from './Update';
import Post from './Post';
import Albums from './AlbumsApidata';

function Router1(){  
    return(
        <BrowserRouter>
      t  <Routes>
            <Route path = "/" element = {<Albums />}/>
            <Route path = "/Post" element = {<Post />}/>
            <Route path = "/Update" element = {<Update />}/>
           <Route path = "/Delete" element = {<Delete />}/>
        </Routes>
        </BrowserRouter>
    )
}

 export default Router1;