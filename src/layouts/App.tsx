import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="w-10 mx-auto">
        <Outlet />
      </div>
    </>
  );
}

export default App;
