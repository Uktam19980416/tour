import bahnhof from '../images/bahnhof.jpg'
import { Button } from './Button'
import { useTranslation } from 'react-i18next'

export const Reservation = () => {
  const { t } = useTranslation()
  const style = {
    background: `url(${bahnhof}) no-repeat center center/cover`,
    height: '100vh',
    filter: 'contrast(30%)',
  }

  return (
    <>
      <div className="relative h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full backdrop-contrast-125 bg-white/30"
          style={style}
        ></div>
        <div
          className="relative flex flex-col items-center justify-center gap-5 max-md:gap-2 w-full h-full"
          id="contacts"
          data-aos="fade-right"
        >
          <p className="text-3xl text-slate-200 font-medium max-md:text-xl">
            {t('reservation.title')}
          </p>
          <hr className="border-2 border-solid border-slate-200 w-1/12" />
          <p className="text-6xl text-slate-200 font-medium max-md:text-3xl text-center">
            {t('reservation.subtitle')}
          </p>
          <Button text={t('reservation.buttonText')} />
        </div>
      </div>

      <div className="container w-[1440px] max-sm:px-2 max-sm:w-full max-w-4/5 mx-auto">
        <div
          className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1"
          data-aos="flip-up"
        >
          <div className="relative -top-20 py-5 flex flex-col justify-between gap-2 bg-white items-center rounded-3xl shadow shadow-slate-300 border-2">
            <div className="rounded-full py-3 px-4 bg-slate-100">
              <i className="fa-solid fa-phone text-slate-500 text-xl max-lg:text-lg"></i>
            </div>
            <p className="text-3xl font-bold text-slate-600 max-lg:text-2xl text-center">
              {t('reservation.phone.title')}
            </p>
            <p className="text-slate-400 text-2xl font-bold max-lg:text-xl max-sm:text-sm text-center">
              {t('reservation.phone.number')}
            </p>
          </div>
          <div className="relative -top-20 py-5 flex flex-col justify-between gap-2 bg-white items-center rounded-3xl shadow shadow-slate-300 border-2">
            <div className="rounded-full py-3 px-4 bg-slate-100">
              <i className="fa-solid fa-envelope text-slate-500 text-xl max-lg:text-lg"></i>
            </div>
            <p className="text-3xl font-bold text-slate-600 max-lg:text-2xl text-center">
              {t('reservation.email.title')}
            </p>
            <p className="text-slate-400 text-2xl font-bold max-lg:text-sm text-center">
              {t('reservation.email.address')}
            </p>
          </div>
          <div className="relative -top-20 py-5 flex flex-col justify-between gap-2 bg-white items-center rounded-3xl shadow shadow-slate-300 border-2">
            <div className="rounded-full py-3 px-4 bg-slate-100">
              <i className="fa-solid fa-location-dot text-slate-500 text-xl max-lg:text-lg"></i>
            </div>
            <p className="text-3xl font-bold text-slate-600 max-lg:text-2xl text-center">
              {t('reservation.location.title')}
            </p>
            <p className="text-slate-400 text-2xl font-bold max-lg:text-sm text-center">
              {t('reservation.location.address')}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
