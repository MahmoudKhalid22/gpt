import React from "react";
import "./article.css";

const Article = ({ imgUrl, date, info, data }) => {
  return (
    <div className="gpt_article">
      <div className="gpt_article_image">
        <img src={imgUrl} alt="blog img" />
      </div>
      <div className="gpt_article_content">
        <div>
          <p className="gpt_article_date">{date}</p>
          <h3 className="gpt_article_info">{info}</h3>
        </div>
        <p className="gpt_article_data">{data}</p>
      </div>
    </div>
  );
};

export default Article;
