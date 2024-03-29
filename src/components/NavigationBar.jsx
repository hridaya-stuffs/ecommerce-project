import MagnifyingGlassIcon from "../images/icons/MagnifyingGlassIcon";
import UserCircleIcon from "../images/icons/UserCircleIcon";
import SunIcon from "../images/icons/SunIcon";
import MoonIcon from "../images/icons/MoonIcon";
import ShopIcon from "../images/icons/ShopIcon";
import CartIcon from "../images/icons/CartIcon";
import { useDarkMode } from "./DarkMode";
import TopHeader from "./TopHeader";

const NavigationBar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="fixed top-0 z-50 flex w-full flex-col gap-5 border-b border-black bg-slate-100 p-3 dark:border-white dark:bg-neutral-900">
      <div className="topHeader">
        <TopHeader />
      </div>
      <div className="mainHeader flex flex-row items-center justify-between">
        <a href="/" className="navBarLogo flex items-center gap-2">
          <ShopIcon className="text-4xl text-black dark:text-white" />
          <strong className="text-lg text-black dark:text-white">
            Hamro Pasal
          </strong>
        </a>
        <div className="searchBar">
          <form className="flex gap-1 align-middle" action="#!">
            <div className="relative">
              <input
                type="text"
                className="h-9 w-72 rounded-full text-center text-black placeholder-black ring-1 ring-[#0b0c0f] placeholder:text-center placeholder:decoration-transparent dark:bg-neutral-900 dark:text-white dark:placeholder-white dark:ring-1 dark:ring-[#d1d1d1]"
                placeholder="Work In Progress"
                name="SearchBarInputField"
              />
              <button
                type="submit"
                className="absolute inset-y-0 right-2 pr-1"
                title="Search"
              >
                <MagnifyingGlassIcon className="ml-[-0.5rem]" />
              </button>
            </div>
          </form>
        </div>
        <div className="navBarItems flex items-center gap-3">
          <button
            className="rounded-full p-2 hover:bg-slate-300 dark:hover:bg-neutral-700"
            title="View Shopping Cart"
          >
            <CartIcon />
          </button>
          <a
            href="/user/login"
            className="focus:shadow-outline-blue flex select-none gap-2 rounded-full bg-blue-500 px-3 py-2 text-white transition duration-300 hover:bg-blue-600 focus:outline-none"
          >
            <span>
              <UserCircleIcon />
            </span>
            Login / Register
          </a>
          <button
            onClick={toggleDarkMode}
            className="rounded-full p-2 transition duration-300 ease-in-out hover:bg-slate-300 dark:hover:bg-neutral-700"
            aria-label="Dark/Light Mode Toggle"
            title={`Switch to ${isDarkMode ? "Light" : "Dark"} Mode`}
          >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
