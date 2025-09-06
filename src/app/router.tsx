import { createBrowserRouter ,createRoutesFromElements ,Route } from "react-router-dom";
import App from "../App";
import MailPage from "../pages/mailPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<App />}>

    <Route path="mail" element= {<MailPage/>}/>
    </Route>
  
    
    </>
   
    
  )
);
export default router;