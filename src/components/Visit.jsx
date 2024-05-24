import { Button } from './Button'
import dubai from '../images/dubai.jpg'
import antalya from '../images/antalya.jpg'
import sheikh from '../images/sheikh.jpg'
import turkey from '../images/turkey.jpg'
import { useTranslation } from 'react-i18next'

export const Visit = () => {
  const { t } = useTranslation()
  return (
    <div className="container w-[1440px] max-sm:w-full max-sm:px-2 max-w-4/5 mx-auto my-20">
      <div
        className="w-1/2 flex flex-col gap-4 max-md:text-center max-md:w-full"
        data-aos="fade-left"
      >
        <h1 className="text-4xl font-bold max-md:text-2xl">
          {t('visit.title')}
        </h1>
        <p className="text-xl text-slate-500 font-semibold max-md:text-sm">
          {t('visit.text')}
        </p>
      </div>

      <div className="flex gap-5 mt-10 max-lg:flex-col" data-aos="fade-left">
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={dubai}
            alt={t('visit.card1.imageAlt')}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                {t('visit.card1.title')}
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                {t('visit.card1.subText')}
              </p>
            </div>
            <Button text={t('visit.card1.exploreMore')} />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            {t('visit.card1.text')}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; {t('visit.card1.population')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; {t('visit.card1.area')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; {t('visit.card1.price')}
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all max-sm:text-lg">
              {t('visit.card1.directions')} <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10 max-lg:flex-col" data-aos="fade-right">
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={antalya}
            alt={t('visit.card2.imageAlt')}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                {t('visit.card2.title')}
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                {t('visit.card2.subText')}
              </p>
            </div>
            <Button text={t('visit.card2.exploreMore')} />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            {t('visit.card2.text')}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; {t('visit.card2.population')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; {t('visit.card2.area')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; {t('visit.card2.price')}
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all max-sm:text-lg">
              {t('visit.card2.directions')} <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10 max-lg:flex-col" data-aos="fade-left">
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={sheikh}
            alt={t('visit.card3.imageAlt')}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                {t('visit.card3.title')}
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                {t('visit.card3.subText')}
              </p>
            </div>
            <Button text={t('visit.card3.exploreMore')} />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            {t('visit.card3.text')}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; {t('visit.card3.population')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; {t('visit.card3.area')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; {t('visit.card3.price')}
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all max-sm:text-lg">
              {t('visit.card3.directions')} <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10 max-lg:flex-col" data-aos="fade-right">
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={turkey}
            alt={t('visit.card4.imageAlt')}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                {t('visit.card4.title')}
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                {t('visit.card4.subText')}
              </p>
            </div>
            <Button text={t('visit.card4.exploreMore')} />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            {t('visit.card4.text')}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; {t('visit.card4.population')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; {t('visit.card4.area')}
            </p>
            <p className="text-xl text-slate-500 max-sm:text-xs">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; {t('visit.card4.price')}
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all max-sm:text-lg">
              {t('visit.card4.directions')} <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
