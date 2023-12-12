import "./style.css";
import listRouter from "./router";
import { Route, Routes } from "react-router-dom";
function App() {
  console.log(listRouter);
  return (
    <>
      {
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
      }
    </>
  );
}

export default App;
