import Aos from "aos";
import React from "react";
import { RouterProvider } from "react-router-dom";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from "./Context/DrawerContext";
import { ToastContainer } from "react-toastify";
import { router } from "./private_router";

function App() {
  Aos.init();
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <DrawerContext>
        <ScrollOnTop>
          <RouterProvider router={router}/>
        </ScrollOnTop>
      </DrawerContext>
    </>
  );
}

export default App;
