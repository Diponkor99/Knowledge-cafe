import Profiler from "../../assets/images/profile.png";
const Header = () => {
    return (
       <div className='m-auto max-w-6xl'>
         <div className="flex justify-between m-4 items-center">
              <h1 className='text-[#111111] text-4xl  font-bold'>Knlowage Cafa</h1>
             <img className="w-[50px]" src={Profiler} alt="" />
             
        </div>
        <hr />
       </div>
    );
};

export default Header;