
import './App.css';
import HomeComponents from './Components/Home';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <>

      <BrowserRouter>
      <HomeComponents/>
      {/* <Dashboarddata/> */}
        <Routes>
          <Route exact path="/home" element={<HomeComponents />} />
          {/* <Route exact path="/developer" element={<About />} />
          <Route exact path="/about" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
// Manifest
// Service worker
// https://
// favicon.icon
// maskable icon
// APP name
// install swr
// npx create-react-app my-app --template cra-template-pwa




























// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.register();






// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
