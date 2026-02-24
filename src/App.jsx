import React from "react";
import AllComponents from "./components/AllComponents";
import Home from "./screens/Home";

const App = () => {
  return (
    <>
      <div className="bg-white w-[95vw] h-screen mx-auto my-0 rounded-2xl p-5">
        {/* <AllComponents /> */}
        <Home />
      </div>
    </>
  );
};

export default App;
