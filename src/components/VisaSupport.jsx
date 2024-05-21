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
          speed: 1,
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
      <div className="container w-[1440px] max-w-4/5 mx-auto my-20">
        <div className="text-center w-1/2 mx-auto flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Visa Support</h1>
          <p className="text-xl font-semibold">
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
                  <div className="relative h-[400px]">
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
                          <p className="text-2xl font-bold">Italy</p>
                          <p className="text-2xl font-bold text-slate-800">
                            $200
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p>
                            <span>
                              <i className="fa-solid fa-users"></i>
                            </span>
                            200 Check Ins
                          </p>
                          <p>/person</p>
                        </div>
                      </div>
                      <div>
                        <hr />
                      </div>
                      <div>
                        <p className="text-xl font-bold">Deal includes:</p>
                        <ul className="list-none">
                          <li>
                            <span>
                              <i className="fa-solid fa-car"></i>
                            </span>{' '}
                            3 Nights Stay
                          </li>
                          <li>
                            <span>
                              <i className="fa-solid fa-plane-departure"></i>
                            </span>{' '}
                            Breakfast
                          </li>
                          <li>
                            <span>
                              <i className="fa-solid fa-hotel"></i>
                            </span>{' '}
                            City Tour
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
                          <p className="text-2xl font-bold">Italy</p>
                          <p className="text-2xl font-bold text-slate-800">
                            $200
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p>
                            <span>
                              <i className="fa-solid fa-users"></i>
                            </span>
                            200 Check Ins
                          </p>
                          <p>/person</p>
                        </div>
                      </div>
                      <div>
                        <hr />
                      </div>
                      <div>
                        <p className="text-xl font-bold">Deal includes:</p>
                        <ul className="list-none">
                          <li>
                            <span>
                              <i className="fa-solid fa-car"></i>
                            </span>{' '}
                            3 Nights Stay
                          </li>
                          <li>
                            <span>
                              <i className="fa-solid fa-plane-departure"></i>
                            </span>{' '}
                            Breakfast
                          </li>
                          <li>
                            <span>
                              <i className="fa-solid fa-hotel"></i>
                            </span>{' '}
                            City Tour
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
