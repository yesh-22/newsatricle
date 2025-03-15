import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsForm.css"

const NewsForm = ({ fetchNews }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("Politics"); 
    const [imageUrl, setImageUrl] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await fetch("http://localhost:5000/api/news", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description, author, category, imageUrl })
        });

        fetchNews();
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required /><br></br>
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required /><br></br>
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required /><br></br>
            
            
            <select value={category} onChange={(e) => setCategory(e.target.value)}><br></br>
                <option value="Politics">Politics</option>
                <option value="Sports">Sports</option>
                <option value="Technology">Technology</option>
                <option value="Health">Health</option>
                <option value="Entertainment">Entertainment</option>
            </select><br></br>

            <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} /><br></br>
            <button type="submit">Add News</button><br></br>
        </form>
    );
};

export default NewsForm;
