import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'
function App() {
  const [bookmarks,setBookmarks]=useState([])
  const[mark,setmark]=useState(0)
  const handleAddBookmarks= blog=>{
    const newBlookmark=[...bookmarks , blog]
    setBookmarks(newBlookmark)
  }
  const handleReadMark=(time ,id)=>{
    setmark(mark + time);
    const removeTitle=bookmarks.filter(remov=>remov.id !==id)
    setBookmarks(removeTitle)
  }
 
return (
    <>
   <Header ></Header>
   <div className='md:flex m-auto max-w-6xl'>
   <Blogs handleAddBookmarks={handleAddBookmarks}
   handleReadMark={handleReadMark}
   ></Blogs>
   <Bookmarks bookmarks={bookmarks} mark={mark}></Bookmarks>
   </div>
    </>
  )
}

export default App
