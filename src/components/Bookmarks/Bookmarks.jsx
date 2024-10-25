import PropTypes from 'prop-types';
import BooKmark from '../Bookmark/BooKmark';
const Bookmarks = ({bookmarks,mark}) => {
    // console.log(bookmarks)
    return (
        <div className="w-1/3 bg-lime-200 p-4 m-4 rounded-xl">
            <h1 className='text-3xl font-bold bg-slate-200 px-2 py-4 rounded-xl'>Spent time read : {mark}  min</h1>
            <h1 className="text-3xl">Bookmark:{bookmarks.length}</h1>
            {bookmarks.map(bookmark=> <BooKmark key={bookmark.id} bookmark={bookmark}></BooKmark>)}
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.func,
    mark:PropTypes.func
}
export default Bookmarks;