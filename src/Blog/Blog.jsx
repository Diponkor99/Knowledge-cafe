import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog ,handleAddBookmarks ,handleReadMark}) => {
    const {id, title,cover,author_img,author ,posted_date,reading_time,hashtags}=blog;
    return (
        <div className='mt-4 mb-20 space-y-2 '>
            <img className='w-full' src={cover} alt="" />
             <div className='flex justify-between'>
                <div className='flex items-center'>
                    <div><img className='w-[60px]' src={author_img }alt="" /></div>
                    <div>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='flex gap-2'>{reading_time}  min read 
                        <button onClick={()=>{handleAddBookmarks(blog)}} className='text-xl text-red-900 font-bold'>< FaRegBookmark ></FaRegBookmark></button></p>
                </div>
             </div>
             {hashtags.map((hasht, index)=> <span key={index}> <a href="">#{hasht}</a></span>)}
           
            <h1 className='font-bold text-4xl text-[#111111]'>{title}</h1>
          <button onClick={()=>handleReadMark(reading_time,id)} className='text-[#6047EC] font-semibold underline text-xl'>Mark as read</button>
        </div>
    );
};
Blog.propTypes={
    blog:PropTypes.object.isRequired,
    handleAddBookmarks:PropTypes.func,
    handleReadMark:PropTypes.func
}

export default Blog;