import { useEffect, useRef } from 'react'
import Splide from '@splidejs/splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/splide/dist/css/splide.min.css'
import italy from '../images/Italy.jpg'
import logo from '../images/mainLogo.png'
import { useTranslation } from 'react-i18next'

export const Offers = () => {
  const splideRef = useRef(null)
  const { t } = useTranslation()

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
    <div
      className="container w-[1440px] max-w-4/5 max-sm:w-full mx-auto my-20 max-sm:px-2"
      id="tours"
    >
      <div
        data-aos="zoom-in"
        className="text-center w-1/2 max-md:w-full mx-auto flex flex-col gap-4"
      >
        <h1 className="text-4xl font-bold max-md:text-2xl">
          {t('offers.title')}
        </h1>
        <p className="text-xl font-semibold max-md:text-sm">
          {t('offers.text')}
        </p>
      </div>
      <div className="mt-10">
        <div className="splide" ref={splideRef}>
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <div className="relative h-[400px] md:h-[500px] max-xl:h-[500px]">
                  <div className="w-4/6 h-[250px]">
                    <img
                      className="w-full h-full object-cover rounded-l-[10%]"
                      src={italy}
                      alt={t('offers.card1.imageAlt')}
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-5 rounded-box border border-solid w-4/6 absolute top-10 left-32 z-50 bg-slate-50 ">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold max-sm:text-lg">
                          {t('offers.card1.country')}
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
                          200 {t('offers.card1.checkIn')}
                        </p>
                        <p className="text-slate-500 max-sm:text-xs">
                          /{t('offers.card1.person')}
                        </p>
                      </div>
                    </div>
                    <div>
                      <hr />
                    </div>
                    <div>
                      <p className="text-xl font-bold max-sm:text-lg">
                        {t('offers.card1.dealIncludes')}:
                      </p>
                      <ul className="list-none">
                        <li className="text-slate-500 text-xl max-sm:text-xs">
                          <span>
                            <i className="fa-solid fa-car"></i>
                          </span>{' '}
                          5 {t('offers.card1.daysTrip')}
                        </li>
                        <li className="text-slate-500 text-xl max-sm:text-xs">
                          <span>
                            <i className="fa-solid fa-plane-departure"></i>
                          </span>{' '}
                          {t('offers.card1.airplaneBill')}
                        </li>
                        <li className="text-slate-500 text-xl max-sm:text-xs">
                          <span>
                            <i className="fa-solid fa-hotel"></i>
                          </span>{' '}
                          {t('offers.card1.dailyPlaces')}
                        </li>
                      </ul>
                    </div>
                    <div className="text-center bg-slate-200 py-3 max-sm:py-1 rounded-full hover:bg-slate-800 hover:text-slate-200 text-slate-700 transition-all cursor-pointer max-sm:w-full max-sm:mt-5 max-sm:mx-auto">
                      <button className="text-lg px-10 font-semibold max-sm:text-xs">
                        {t('offers.card1.makeReservation')}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="splide__slide">
                <div className="relative h-[400px] md:h-[500px] max-xl:h-[500px]">
                  <div className="w-4/6 h-[250px]">
                    <img
                      className="w-full h-full object-cover rounded-l-[10%]"
                      src={logo}
                      alt={t('offers.card2.imageAlt')}
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-5 rounded-box border border-solid w-4/6 absolute top-10 left-32 z-50 bg-slate-50 ">
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold max-sm:text-lg">
                          {t('offers.card2.country')}
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
                          200 {t('offers.card2.checkIn')}
                        </p>
                        <p className="text-slate-500 max-sm:text-xs">
                          /{t('offers.card2.person')}
                        </p>
                      </div>
                    </div>
                    <div>
                      <hr />
                    </div>
                    <div>
                      <p className="text-xl font-bold max-sm:text-lg">
                        {t('offers.card2.dealIncludes')}:
                      </p>
                      <ul className="list-none">
                        <li className="text-slate-500 text-xl max-sm:text-xs">
                          <span>
                            <i className="fa-solid fa-car"></i>
                          </span>{' '}
                          5 {t('offers.card2.daysTrip')}
                        </li>
                        <li className="text-slate-500 text-xl max-sm:text-xs">
                          <span>
                            <i className="fa-solid fa-plane-departure"></i>
                          </span>{' '}
                          {t('offers.card2.airplaneBill')}
                        </li>
                        <li className="text-slate-500 text-xl max-sm:text-xs">
                          <span>
                            <i className="fa-solid fa-hotel"></i>
                          </span>{' '}
                          {t('offers.card2.dailyPlaces')}
                        </li>
                      </ul>
                    </div>
                    <div className="text-center bg-slate-200 py-3 max-sm:py-1 rounded-full hover:bg-slate-800 hover:text-slate-200 text-slate-700 transition-all cursor-pointer max-sm:w-full max-sm:mt-5 max-sm:mx-auto">
                      <button className="text-lg px-10 font-semibold max-sm:text-xs">
                        {t('offers.card2.makeReservation')}
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
