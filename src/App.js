// import ResponsiveAppBar from "./commponents/navbar/navbar-com";
// import GridCard from "./commponents/productDis/productDis";
import { BrowserRouter } from "react-router-dom";
import RouterCom from "./commponents/router/RouterCom";

function App() {
  return (
    <>
      <BrowserRouter>
      <RouterCom/>
      </BrowserRouter>
      
      {/* <ResponsiveAppBar />
      <GridCard/> */}
      
    </>
    
  );
}

export default App;
