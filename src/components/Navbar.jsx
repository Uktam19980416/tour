import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import logo from "../images/mainLogo2.png"
import './Loader.css'
import { NavbarMobile } from "./NavbarMobile"

export const Navbar = () => {
  const [loading, setLoading] = useState(true)
  const { t, i18n } = useTranslation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleLogoClick = () => {
    setLoading(true)
    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }
  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <header className="bg-slate-200 fixed top-0 left-0 w-full z-20 py-4">
        <div className="container w-[1440px] max-w-4/5 mx-auto">
          <div
            className="flex items-center justify-between max-md:hidden"
            href="/"
          >
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
            <nav>
              <ul className="flex items-center gap-10">
                <li className="list-none">
                  <a className="text-xl font-medium" onClick={handleLogoClick}>
                    {t('home')}
                  </a>
                </li>
                <li className="list-none">
                  <a className="text-xl font-medium" href="#about">
                    {t("about")}
                  </a>
                </li>
                <li className="list-none">
                  <a className="text-xl font-medium" href="#tours">
                    {t("tours")}
                  </a>
                </li>
                <li className="list-none">
                  <a className="text-xl font-medium" href="#contacts">
                    {t("contacts")}
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-5">
              <p className="text-xl font-medium cursor-pointer"  onClick={() => i18n.changeLanguage('uz')}>UZ</p>
              <p className="text-xl font-medium cursor-pointer"  onClick={() => i18n.changeLanguage('en')}>EN</p>
              <p className="text-xl font-medium cursor-pointer"  onClick={() => i18n.changeLanguage('ru')}>RU</p>
              <div>
                <i className="fa-brands fa-telegram text-xl font-medium cursor-pointer"></i>
              </div>
              <div>
                <i className="fa-brands fa-instagram text-xl font-medium cursor-pointer"></i>
              </div>
            </div>
          </div>
        </div>
          <NavbarMobile handleLogoClick={handleLogoClick} logo={logo} />
      </header>
    </>
  )
}
