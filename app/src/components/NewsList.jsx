import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCards";

const NewsList = () => {
    const [news, setNews] = useState([]);

 
    const fetchNews = async () => {
        try {
            const res = await fetch("http://localhost:5000/api/news");
            const data = await res.json();
            setNews(data);
        } catch (err) {
            console.error("Error fetching news:", err);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div className="news-list">
            {news.length === 0 ? (
                <p>No news articles available.</p>
            ) : (
                news.map((item) => (
                    <NewsCard
                        key={item._id}
                        id={item._id} 
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        category={item.category}
                        imageUrl={item.imageUrl}
                        date={item.date}
                        fetchNews={fetchNews} 
                    />
                ))
            )}
        </div>
    );
};

export default NewsList;
