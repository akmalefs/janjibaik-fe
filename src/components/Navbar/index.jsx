import Button from "../Button";

const Navbar = () => {
  return (
    <div className="absolute z-10 w-full bg-base-100 shadow-sm py-4">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img src="./logo.png" alt="logo janji baik" width={98} height={67} />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 px-1">
            <li>
              <a className="text-lg text-black">Beranda</a>
            </li>
            <li>
              <details>
                <summary className="text-lg text-black">Tentang Kami+</summary>
                <ul className="p-2">
                  <li>
                    <a className="text-lg text-black">Submenu 1</a>
                  </li>
                  <li>
                    <a className="text-lg text-black">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-lg text-black">Divisi Kami</a>
            </li>
            <li>
              <a className="text-lg text-black">Event</a>
            </li>
            <li>
              <details>
                <summary className="text-lg text-black">Donasi+</summary>
                <ul className="p-2">
                  <li>
                    <a className="text-lg text-black">shisjsjsjisjis</a>
                  </li>
                  <li>
                    <a className="text-lg text-black">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-lg text-black">Kontak Kami</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Button variant="w-[220px]">Daftar Sekarang</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
