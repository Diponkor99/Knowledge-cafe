import PropTypes from 'prop-types';
const BooKmark = ({bookmark}) => {
    const{title}=bookmark;
    return (
        <div className='bg-slate-300 p-4 m-2 rounded-lg'>
            <h2 className="text-3xl">{title}</h2>
        </div>
    );
};
BooKmark.propTypes={
    bookmark:PropTypes.object 
}
export default BooKmark;