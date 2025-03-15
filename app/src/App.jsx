import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsList from "./components/NewsList";
import NewsForm from "./components/NewsForm";
import "./App.css";

const App = () => (
    <Router>
        <nav className="navbar">
            <h1>News Platform</h1>
            <div>
                <Link to="/">Home</Link><br></br>
                <Link to="/add-news">Add News</Link>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/add-news" element={<NewsForm />} />
        </Routes>
    </Router>
);

export default App;
