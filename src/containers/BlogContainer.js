import React from "react";
import ReactMarkdown from "react-markdown/with-html";

import * as Blogs from "../../db/blogs"


class BlogContainer extends React.Component {

    state = {
        blogs: []
    }

    componentDidMount() {
        // Have to do a basic for loop because babel-plugin-wildcard
        // is returning something that is not quite a normal object.
        // Can't call Blogs.values, can't do normal object stuff
        for (let i = 1; i < 500; i++) {
            let blogNum = "Blog" + i;
            
            if (Blogs[blogNum]) {
                this.setState(prevState => ({
                    blogs: [...prevState.blogs, Blogs[blogNum]],
                }));
            } else {
                break;
            }
        }
    }

    render() {
        const renderBlogs = this.state.blogs.map((blog, i) => {
            return (
              <>
                <ReactMarkdown key={i} escapeHtml={false}>{blog}</ReactMarkdown>
              </>
            )
        })

        return (
            <div id="blog-wrapper">
                {renderBlogs}
            </div>
        )
    }
}

export default BlogContainer