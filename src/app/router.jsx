import { createBrowserRouter ,createRoutesFromElements ,Route } from "react-router-dom";
import App from "../App";
import MailPage from "../pages/mailPage";
import NewMail from "../pages/newMail";
import MailDetials from "../pages/mailDetials";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route path="/" element={<App />}>

    <Route path="mail" element= {<MailPage/>}/>
   
    <Route path="newmail" element= {<NewMail/>}/>
    <Route path="maildetials/:id" element= {<MailDetials/>}/>
    
  
     </Route>
    </>
   
    
  )
);
export default router;