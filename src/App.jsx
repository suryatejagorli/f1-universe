import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home"
import Drivers from "./pages/Drivers"
import DriverProfile from "./pages/DriverProfile"
import Teams from "./pages/Teams"
import TeamProfile from "./pages/TeamProfile";
import Calendar from "./pages/Calendar"
import Standings from "./pages/Standings"
import NextRace from "./pages/NextRace"
import Highlights from "./pages/Highlights"
import AboutMe from "./pages/AboutMe";

function App() {
  return (
    <BrowserRouter>

    <ScrollToTop />

    <Routes>

        <Route element={<Layout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/drivers"
            element={<Drivers />}
          />

          <Route
            path="/drivers/:name"
            element={<DriverProfile />}
          />

          <Route
            path="/teams"
            element={<Teams />}
          />

          <Route
            path="/teams/:teamId"
            element={<TeamProfile />}
          />

          <Route
            path="/calendar"
            element={<Calendar />}
          />

          <Route
            path="/standings"
            element={<Standings />}
          />

          <Route
            path="/next-race"
            element={<NextRace />}
          />

          <Route
            path="/highlights"
            element={<Highlights />}
          />

          <Route
            path="/about"
            element={<AboutMe />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App