import { Button } from "./Button"
import railway from "../images/railway.jpg"
import airplane from "../images/plane.jpg"
import { useTranslation } from 'react-i18next'
export const Explore = () => {
  const { t } = useTranslation()
  return (
    <div
      className="container w-[1440px] max-sm:px-2 max-sm:w-full max-w-4/5 mx-auto my-20"
      id="about"
    >
      <div
        className="w-1/2 max-md:w-full flex flex-col max-md:text-center gap-4"
        data-aos="fade-right"
      >
        <h1 className="text-4xl font-bold max-md:text-2xl">
          {t('explore.title')}
        </h1>
        <p className="text-xl text-slate-500 font-semibold max-md:text-sm">
          {t('explore.text')}
        </p>
      </div>
      <div className="flex gap-5 mt-10 max-lg:flex-col" >
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={railway}
            alt={t('explore.card1.imageAlt')}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                {t('explore.card1.title')}
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                {t('explore.card1.subText')}
              </p>
            </div>
            <Button text={t('explore.card1.exploreMore')} />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            {t('explore.card1.text')}
          </p>
        </div>
      </div>

      <div className="flex gap-5 mt-10 max-lg:flex-col" data-aos="fade-right">
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={airplane}
            alt={t('explore.card1.imageAlt')}
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                {t('explore.card1.title')}
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                {t('explore.card1.subText')}
              </p>
            </div>
            <Button text={t('explore.card1.exploreMore')} />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            {t('explore.card1.text')}
          </p>
        </div>
      </div>
    </div>
  )
}
