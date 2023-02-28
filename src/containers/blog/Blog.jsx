import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

function Blog() {
  return (
    <div className="gpt_blog section-padding" id="blog">
      <div className="gpt_blog-heading">
        <h1 className="gradint-text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt_blog-container">
        <div className="groupA">
          <Article
            imgUrl={blog01}
            date="Sep 26,2021"
            info="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Read Full Article"
          />
        </div>
        <div className="groupB">
          <Article
            imgUrl={blog02}
            date="Sep 27,2021"
            info="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Read Full Article"
          />
          <Article
            imgUrl={blog03}
            date="Sep 27,2021"
            info="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Read Full Article"
          />
          <Article
            imgUrl={blog04}
            date="Sep 27,2021"
            info="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Read Full Article"
          />
          <Article
            imgUrl={blog05}
            date="Sep 27,2021"
            info="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            data="Read Full Article"
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
