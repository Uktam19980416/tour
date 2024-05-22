import { useState, useEffect } from "react"
import logo from "../images/mainLogo2.png"
import './Loader.css'
import { NavbarMobile } from "./NavbarMobile"

export const Navbar = () => {
  const [loading, setLoading] = useState(true)

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
                    Home
                  </a>
                </li>
                <li className="list-none">
                  <a className="text-xl font-medium" href="#about">
                    About
                  </a>
                </li>
                <li className="list-none">
                  <a className="text-xl font-medium" href="#tours">
                    Tours
                  </a>
                </li>
                <li className="list-none">
                  <a className="text-xl font-medium" href="#contacts">
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-5">
              <p className="text-xl font-medium cursor-pointer">UZ</p>
              <p className="text-xl font-medium cursor-pointer">EN</p>
              <p className="text-xl font-medium cursor-pointer">RU</p>
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
