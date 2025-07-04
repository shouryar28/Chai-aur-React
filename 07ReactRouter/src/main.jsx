import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router"; // router provider hi hume access dega koi dusre page mein jaane kaa agar hum directly header se chaahe ki whi se chale jaaye too waisaa nhi ho sakta hai iss scenario mein. hume ek key va;lue pair dena hoga to go on a specific page
import Layout from "./Layout.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/GitHub/Github.jsx";
User;
// Route ko self closing bhi kar sakte hai... yaa firr uske andar nesting bhi kar sakte hai.

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />

//       },
//       {
//         path:"contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(  
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} />
    </Route>
  )
);
// userid ko hum access karsakte hai User.jsx ke andar
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
