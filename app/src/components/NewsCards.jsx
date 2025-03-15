import React, { useState } from "react";
import "./NewsCards.css";

const NewsCard = ({ id, title, description, author, category, imageUrl, date, fetchNews }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleReadMore = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="news-card">
            {imageUrl ? <img src={imageUrl} alt={title} className="news-image" /> : <div className="news-placeholder">No Image</div>}
            <div className="news-content">
                <h2 className="news-title">{title || "No Title"}</h2>
                <p className="news-description">
                    {expanded ? description : `${description.slice(0, 100)}...`}
                </p>
                <button className="read-more-button" onClick={toggleReadMore}>
                    {expanded ? "Show Less" : "Read More"}
                </button>
                <p className="news-meta">
                    <strong>By:</strong> {author || "Unknown"} | <strong>Category:</strong> {category || "General"} <br />
                    <strong>Date:</strong> {date ? new Date(date).toDateString() : "N/A"}
                </p>
                <button className="delete-button" onClick={() => fetchNews(id)}>🗑 Delete</button>
            </div>
        </div>
    );
};

export default NewsCard;
