import PropTypes from 'prop-types'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const NavbarMobile = ({ handleLogoClick, logo }) => {
  const { t, i18n } = useTranslation()
  const [checked, setChecked] = useState(false)

  const handleToggle = () => {
    setChecked(!checked)
  }

  const handleLinkClick = () => {
    setChecked(false)
  }

  const changeLang = (lang) => {
    i18n.changeLanguage(lang)
    setChecked(false)
  }

  return (
    <>
      <div className="hidden max-md:block max-sm:px-2">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-[60px] max-sm:w-[40px] object-cover">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
            <div>
              <p className="text-4xl font-bold max-sm:text-xl">go tour</p>
              <p className="text-xs font-semibold">business travel</p>
            </div>
          </div>
          <label htmlFor="menu-toggle" onClick={handleToggle}>
            <i
              className={`fa-solid fa-${
                checked ? 'xmark' : 'bars-staggered'
              } cursor-pointer text-2xl max-sm:text-xl`}
            ></i>
          </label>
        </div>
      </div>

      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        checked={checked}
        readOnly
      />
      <div
        className={`md:hidden fixed ${
          checked ? 'left-0' : '-left-full'
        } top-0 w-full h-dvh toggled-bar flex flex-col bg-white transition-all px-10 py-5 z-50`}
      >
        <div className="flex items-center border-b-4 pb-5 justify-between">
          <div
            className="flex items-center cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-[60px] max-sm:w-[40px] object-cover">
              <img className="w-full" src={logo} alt="Logo" />
            </div>
            <div>
              <p className="text-4xl font-bold max-sm:text-xl">go tour</p>
              <p className="text-xs font-semibold">business travel</p>
            </div>
          </div>
          <label
            htmlFor="menu-toggle"
            className="max-sm:text-xl"
            onClick={handleToggle}
          >
            <i className="fa-solid fa-xmark text-2xl text-black cursor-pointer"></i>
          </label>
        </div>
        <div className="mt-5 flex justify-center text-center">
          <ul className="flex flex-col gap-5">
            <li>
              <a className="text-xl font-medium" onClick={handleLinkClick}>
                {t('home')}
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#about"
                onClick={handleLinkClick}
              >
                {t('about')}
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#tours"
                onClick={handleLinkClick}
              >
                Tours
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                href="#contacts"
                onClick={handleLinkClick}
              >
                Contacts
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                onClick={() => changeLang('uz')}
              >
                UZ
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                onClick={() => changeLang('en')}
              >
                ENG
              </a>
            </li>
            <li>
              <a
                className="text-xl font-medium"
                onClick={() => changeLang('ru')}
              >
                RU
              </a>
            </li>
            <li>
              <a className="text-xl font-medium" onClick={handleLinkClick}>
                <i className="fa-brands fa-telegram text-xl font-medium cursor-pointer"></i>
              </a>
            </li>
            <li>
              <a className="text-xl font-medium" onClick={handleLinkClick}>
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
