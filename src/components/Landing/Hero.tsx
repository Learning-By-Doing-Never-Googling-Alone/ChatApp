import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          {/* Title */}
          <h1 className="text-center text-4xl uppercase font-bold tracking-wider sm:text-5xl lg:text-8xl">
            <span className="block text-white font-passion-one ">
              Imagine a place...
            </span>
          </h1>
          {/* Description */}
          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-2xl">
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
          </p>
          {/* CTA Button */}
          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
            <div className="space-y-4 sm:mx-auto ">
              <Link
                to="/signUp"
                className="flex items-center justify-center rounded-md border border-transparent bg-black bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
              >
                Open Discord in your browser
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
