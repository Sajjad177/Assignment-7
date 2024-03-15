import { CgProfile } from "react-icons/cg";
import banner from '../../assets/image/banner-img.jpg'


const Header = () => {
    return (
        <div className="container m-auto py-10">
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-2xl font-bold">North-Hotel</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text"  placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-3xl" />
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="text-3xl bg-[#0BE58A] p-2 rounded-full">
                    <CgProfile />
                </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
                </div>
            </div>
            </div>

            {/* banner section  */}

            <div className="hero mt-10 rounded-xl">
                <img className="w-full rounded-xl" src={banner} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in.eaque aut repudiandae et a id nisi.</p>
                    <button className="btn bg-[#0BE58A] border-none rounded-full">Explore Now</button>
                    <button className="btn btn-outline border-white ml-6 rounded-full text-white">Our Feedback</button>
                </div>
            </div>
            </div>
        </div>
        
    );
};

export default Header;