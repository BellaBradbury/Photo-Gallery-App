import { Route, Routes } from "react-router-dom";
// import apiKey from './config';

// APP COMPONENTS
import Layout from "./components/Layout";
import PhotoContainer from "./components/PhotoContainer";
// import NoResult from "./components/NoResult";

function App() {
  return (
    <div className="container">
      {/* <Routes>
        <Route path='/' element={<Layout />} />
        <Route path='noresult' element={<NoResult />} />
      </Routes> */}
      <Routes>
        <Route path="/" element={<><Layout/><PhotoContainer/></>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
