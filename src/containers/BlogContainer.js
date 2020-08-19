import React from "react";
import ReactMarkdown from "react-markdown/with-html";

import test_blog from "../../db/blogs/blog1.md"


class BlogContainer extends React.Component {
    render() {
        return (
            <div id="blog-wrapper">
                <ReactMarkdown escapeHtml={false}>{test_blog}</ReactMarkdown>
            </div>
        )
    }
}

export default BlogContainer