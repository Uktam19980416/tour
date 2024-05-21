import PropTypes from 'prop-types';

export const NavbarMobile = ({ handleLogoClick, logo}) => {
  return (
    <>
      <div className="hidden max-md:block">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-[60px] object-cover">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
            <div>
              <p className="text-4xl font-bold">go tour</p>
              <p className="text-xs font-semibold">business travel</p>
            </div>
          </div>
          <label htmlFor="menu-toggle">
            <i className="fa-solid fa-bars-staggered cursor-pointer text-2xl"></i>
          </label>
        </div>
      </div>

      <input type="checkbox" className="hidden" id="menu-toggle"></input>
      <div className="md:hidden fixed -left-full top-0 w-full h-dvh toggled-bar flex flex-col bg-white transition-all px-10 py-5 z-50">
        <div className="flex items-center border-b-4 pb-5 justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-[60px] object-cover">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
            <div>
              <p className="text-4xl font-bold">go tour</p>
              <p className="text-xs font-semibold">business travel</p>
            </div>
          </div>
          <label htmlFor="menu-toggle">
            <i className="fa-solid fa-xmark text-2xl text-black cursor-pointer"></i>
          </label>
        </div>
        <div className="mt-5 flex justify-center text-center">
          <ul className="flex flex-col gap-5">
            <li>
              <a className="text-xl font-medium" onClick={handleLogoClick}>
                Home
              </a>
            </li>
            <li>
              <a className="text-xl font-medium" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-xl font-medium" href="#tours">
                Tours
              </a>
            </li>
            <li>
              <a className="text-xl font-medium" href="#contacts">
                Contacts
              </a>
            </li>
            <li>
              <a className="text-xl font-medium">UZ</a>
            </li>
            <li>
              <a className="text-xl font-medium">ENG</a>
            </li>
            <li>
              <a className="text-xl font-medium">RU</a>
            </li>
            <li>
              <a className="text-xl font-medium">
                <i className="fa-brands fa-telegram text-xl font-medium cursor-pointer"></i>
              </a>
            </li>
            <li>
              <a className="text-xl font-medium">
                <i className="fa-brands fa-instagram text-xl font-medium cursor-pointer"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

NavbarMobile.propTypes = {
  handleLogoClick: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired,
}
