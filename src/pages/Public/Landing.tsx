import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div className="bg-[url(https://i.ibb.co/Tvn7DbX/Backsplash.png)] bg-cover ">
        <header>
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <img className="h-8 w-auto sm:h-10" src={logo} alt="Logo" />
              </Link>
            </div>

            <div className="items-center justify-end md:flex md:flex-1 lg:w-0">
              <Link
                to="/signUp"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm"
              >
                Open Discord
              </Link>
            </div>
          </div>
        </header>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 " />
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative  sm:overflow-hidden sm:rounded-2xl">
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl uppercase font-bold tracking-wider sm:text-5xl lg:text-8xl">
                  <span className="block text-white font-passion-one ">
                    Imagine a place...
                  </span>
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-2xl">
                  ...where you can belong to a school club, a gaming group, or a
                  worldwide art community. Where just you and a handful of
                  friends can spend time together. A place that makes it easy to
                  talk every day and hang out more often.
                </p>
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
        </div>
      </div>

      <main>
        <div className="relative overflow-hidden pt-16 pb-32">
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900">
                      Streamline Communication with Your Community
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Effortlessly connect with your community through our
                      Discord clone. Seamlessly manage discussions, share
                      updates, and foster engagement. Whether you're a gaming
                      group, hobby club, or professional team, our platform
                      empowers you to stay connected and informed
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-4 sm:pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://i.ibb.co/89rjKW7/Darkmode.png"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-4 sm:px-6 lg:col-end-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-5xl font-bold tracking-tight text-gray-900">
                      Interaction with Dynamic Discord Chats
                    </h2>
                    <p className="mt-4 text-lg text-gray-500">
                      Chats Description: Revolutionize your community
                      interactions using our innovative Discord chat feature.
                      Engage in real-time conversations, share multimedia
                      content, and collaborate effortlessly. From lively
                      discussions to focused brainstorming, our Discord chat
                      brings your community together like never before
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:mt-0">
                <div className="-mr-48 pl-4 sm:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="https://i.ibb.co/mDpY6W8/Darkmode-1.png"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
