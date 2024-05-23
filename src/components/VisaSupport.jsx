import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'
import italy from '../images/Italy.jpg'
import logo from '../images/mainLogo.png'
import { Button } from './Button'

export const VisaSupport = () => {
  const splideRef = useRef(null)

  useEffect(() => {
    if (splideRef.current) {
      const splide = new Splide(splideRef.current, {
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 3,
        autoScroll: {
          speed: 0.5,
        },
        breakpoints: {
          1024: {
            perPage: 2,
          },
          768: {
            perPage: 1,
          },
        },
        extensions: { AutoScroll },
      })

      splide.mount({ AutoScroll })
      // splide.mount()

      return () => splide.destroy()
    }
  }, [])

  return (
    <>
      {/* <div className="container w-[1440px] max-w-4/5 mx-auto my-20"> */}
      <div className="container w-[1440px] max-w-4/5 max-sm:w-full mx-auto my-20 max-sm:px-2">
        <div
          className="text-center w-1/2 max-md:w-full mx-auto flex flex-col gap-4"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl font-bold max-md:text-2xl">Visa Support</h1>
          <p className="text-xl font-semibold max-md:text-sm">
            Experience stress-free travel with our expert visa support. We
            provide seamless assistance and comprehensive guidance, ensuring a
            smooth journey.
          </p>
        </div>
        <div className="mt-10">
          <div className="splide" ref={splideRef}>
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div className="relative">
                    <div className="w-4/6 h-[250px]">
                      <img
                        className="w-full h-full object-cover rounded-l-[10%]"
                        src={italy}
                        alt="offer"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-5 rounded-box border border-solid w-4/6 absolute top-10 left-32 z-50 bg-slate-50 ">
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold max-sm:text-lg">
                            Italy
                          </p>
                          <p className="text-2xl font-bold text-slate-800 max-sm:text-lg">
                            $200
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-500 max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-users"></i>
                            </span>
                            200 Check Ins
                          </p>
                          <p className="text-slate-500 max-sm:text-xs">
                            /person
                          </p>
                        </div>
                      </div>
                      <div>
                        <hr />
                      </div>
                      <div>
                        <p className="text-xl font-bold max-sm:text-lg">
                          Deal includes:
                        </p>
                        <ul className="list-none">
                          <li className="text-slate-500 text-xl max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-bookmark"></i>
                            </span>{' '}
                            Best Prices
                          </li>
                          <li className="text-slate-500 text-xl max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-clock"></i>
                            </span>{' '}
                            Short Processing Time
                          </li>
                          <li className="text-slate-500 text-xl max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-check"></i>
                            </span>{' '}
                            Trustworthy Assistance
                          </li>
                        </ul>
                      </div>
                      <Button text="Make a reservation" />
                    </div>
                  </div>
                </li>
                <li className="splide__slide">
                  <div className="relative h-[400px]">
                    <div className="w-4/6 h-[250px]">
                      <img
                        className="w-full h-full object-cover rounded-l-[10%]"
                        src={logo}
                        alt="offer"
                      />
                    </div>
                    <div className="p-5 flex flex-col gap-5 rounded-box border border-solid w-4/6 absolute top-10 left-32 z-50 bg-slate-50 ">
                      <div>
                        <div className="flex items-center justify-between">
                          <p className="text-2xl font-bold max-sm:text-lg">
                            Italy
                          </p>
                          <p className="text-2xl font-bold text-slate-800 max-sm:text-lg">
                            $200
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-slate-500 max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-users"></i>
                            </span>
                            200 Check Ins
                          </p>
                          <p className="text-slate-500 max-sm:text-xs">
                            /person
                          </p>
                        </div>
                      </div>
                      <div>
                        <hr />
                      </div>
                      <div>
                        <p className="text-xl font-bold max-sm:text-lg">
                          Deal includes:
                        </p>
                        <ul className="list-none">
                          <li className="text-slate-500 text-xl max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-bookmark"></i>
                            </span>{' '}
                            Best Prices
                          </li>
                          <li className="text-slate-500 text-xl max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-clock"></i>
                            </span>{' '}
                            Short Processing Time
                          </li>
                          <li className="text-slate-500 text-xl max-sm:text-xs">
                            <span>
                              <i className="fa-solid fa-check"></i>
                            </span>{' '}
                            Trustworthy Assistance
                          </li>
                        </ul>
                      </div>
                      <Button text="Make a reservation" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-2 border-solid" />
    </>
  )
}
