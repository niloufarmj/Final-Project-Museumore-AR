import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import './locale.js';
import {routes} from "../routes.js";


function App () {

  return (
    <>

      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}></Suspense>
        <Routes>
          {routes.map(({path, element}) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
