import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { inject } from "@vercel/analytics";

import About from "./pages/about";
import Home from "./pages/home";
import Community from "./pages/community";
import Meme from "./pages/meme";

inject();

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
      <LayoutGroup>
        <RouterProvider router={router} />
      </LayoutGroup>
    </AnimatePresence>
  );
};

export default App;

/* 
    Done:
      ✅ set up Router 
      🌟 Set Up color, typography, image files etc
      🌟 Header component and Hero section.
      🌟 Feature cards and cta
      🌟 more Offers
      🌟 footer
    
    Task List 
      🌟 Add typing animation
      🌟 scroll animation
      🌟 parallax animation for cards

*/
