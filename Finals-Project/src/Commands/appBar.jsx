import { BrowserRouter,Routes , Route } from "react-router-dom";
import Home from './Home';
import Profile from './profile';



const navBar = () => {
    
 <BrowserRouter>
 <Routes>
     <Route element={<Home />} path='/' />
     <Route element={<Profile />} path='/profile' />
 </Routes>
</BrowserRouter>

}
export default navBar