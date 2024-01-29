import { useState } from "react";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  function isSmallScreen() {
    return window.innerWidth < 768;
  }

  function triggerNavItem(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function triggerMobileNavItem(id) {
    setMobileMenu(false);
    triggerNavItem(id);
  }

  function toggleMobileMenu() {
    setMobileMenu(!mobileMenu);
  }

  return (
    <div className="absolute top-0 z-50 w-full py-3 sm:py-5">
      <div className="container flex items-center justify-between">
        <div></div>
        {!isSmallScreen() ? (
          <div className="lg:block">
            <ul className="flex items-center">
              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("about")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </span>
                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("services")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Services
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("portfolio")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("clients")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Clients
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("work")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Work
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("statistics")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Statistics
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("blog")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>

              <li className="group pl-6">
                <span
                  onClick={() => triggerNavItem("contact")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Contact
                </span>

                <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
              </li>
            </ul>
          </div>
        ) : (
          <div className="block lg">
            <button onClick={() => toggleMobileMenu()}>
              <i className="bx bx-menu text-4xl text-white"></i>
            </button>
          </div>
        )}
      </div>
      {mobileMenu && (
        <div
          className={`lg fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 transition-opacity ${
            mobileMenu
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <div className="absolute right-0 min-h-screen w-2/3 bg-primary px-8 py-4 shadow md:w-1/3">
            <button
              className="absolute right-0 top-0 mr-4 mt-4"
              onClick={() => setMobileMenu(false)}
            >
              <img
                src="src/assets/img/icon-close.svg"
                className="h-10 w-auto"
                alt=""
              />
            </button>

            <ul className="mt-8 flex flex-col">
              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("about")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  About
                </span>
              </li>

              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("services")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Services
                </span>
              </li>

              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("portfolio")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Portfolio
                </span>
              </li>

              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("clients")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Clients
                </span>
              </li>

              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("work")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Work
                </span>
              </li>

              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("statistics")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Statistics
                </span>
              </li>

              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("blog")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Blog
                </span>
              </li>

              <li className="py-2">
                <span
                  onClick={() => triggerMobileNavItem("contact")}
                  className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                >
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
