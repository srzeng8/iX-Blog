// import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage";
import Blogs from "./pages/BlogsPage";
import Categories from "./pages/CategoriesPage";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
    <HomePage/>
    <Blogs/>
    <Categories/>

    </div>
  )
}

export default App;
