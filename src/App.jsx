import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

import About from "./pages/about";
import Home from "./pages/home";
import Community from "./pages/community";
import Meme from "./pages/meme";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="community" element={<Community />} />
      <Route path="meme" element={<Meme />} />
    </Route>
  )
);

const App = () => {
  return (
    <AnimatePresence mode="wait" initial="false">
      <RouterProvider router={router} />
    </AnimatePresence>
  );
};

export default App;

/* 
    Done:
      ✅ set up Router 
    
    Task List 
      🌟 Set Up color, typography, image files etc
      🌟 Header component and Hero section.
      🌟 Feature cards and cta
      🌟 more Offers
      🌟 footer

*/
