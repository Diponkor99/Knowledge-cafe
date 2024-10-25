import { useEffect } from "react";
import { useState } from "react";
import Blog from "../../Blog/Blog";
import PropTypes from 'prop-types'
const Blogs = ({handleAddBookmarks,handleReadMark}) => {
    const[blogs, setBloges]=useState([])
    useEffect(()=>{
        fetch('utilites.json')
        .then(Response=>Response.json())
        .then(data=>setBloges(data))
    },[])
    return (
        <div className="w-2/3">
            {blogs.map(blog=> 
            <Blog key={blog.id} 
            blog={blog}
            handleAddBookmarks={handleAddBookmarks}
            handleReadMark={handleReadMark}
            ></Blog>)}
        </div>
    );
};
Blogs.propTypes={
    handleAddBookmarks:PropTypes.func,
    handleReadMark:PropTypes.func
}
export default Blogs;