import "./style.css";
import listRouter from "./router";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  console.log(listRouter);
  return (
    <>
      <Routes>
        {listRouter.map((route, index) => {
          const ComponentSelect = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<ComponentSelect />}
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
