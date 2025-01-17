import { CgProfile } from "react-icons/cg";
import banner from '../../assets/image/banner-img.jpg'

const Header = () => {
    return (
        <div className="container m-auto lg:py-10 p-5">
            <div className="navbar bg-base-100">
            <div className=" navbar-start">
                <a className="btn btn-ghost lg:text-2xl text-xl font-bold">North-Hotel</a>
            </div>
            <div className="navbar-center gap-16 lg:flex hidden">
                <ul><a>Home</a></ul>
                <ul><a>Recipes</a></ul>
                <ul><a>About</a></ul>
                <ul><a>Search</a></ul>
            </div>
            <div className="lg:gap-10 gap-3 navbar-end">
                <div className="form-control">
                    <input type="text"  placeholder="Search" className="input input-bordered w-24 md:w-auto rounded-3xl" />
                </div>
                <div className="">
                    <div className="text-3xl bg-[#0BE58A] p-2 rounded-full">
                        <CgProfile />
                    </div>
                </div>
            </div>
            </div>

            <div className="hero mt-10 rounded-xl">
                <img className="w-full rounded-xl h-[75vh]" src={banner} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content">
                    <div className="lg:space-y-6">
                        <h1 className="mb-5 lg:text-5xl text-xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-5">If you want to eat delicious, tasty food, come now.  We serve you delicious food according to your needs. <br />You also learn how to make food. Stay with us</p>
                        <button className="btn bg-[#0BE58A] border-none rounded-full">Explore Now</button>
                        <button className="btn btn-outline border-white ml-6 rounded-full text-white">Our Feedback</button>
                    </div>
                </div>
            </div>
            <h3 className="text-4xl text-center lg:mt-20 mt-10 font-bold">Our Recipes</h3>
            <h6 className="text-center my-5">Choose your fun, delicious food that soothes you.  We have a variety of food.Enjoy your day.</h6>
        </div>
        
    );
};

export default Header;