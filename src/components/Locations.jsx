import { useTranslation } from 'react-i18next'
export const Locations = () => {
  const { t } = useTranslation()
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto my-20 max-sm:px-2 max-sm:w-full ">
      <div
        className="text-center w-1/2 max-lg:w-full mx-auto flex flex-col gap-4"
        data-aos="zoom-in"
      >
        <h1 className="text-4xl font-bold max-md:text-2xl">{t("locations.title")}</h1>
        <p className="text-xl text-slate-500 font-semibold max-md:text-sm">
          {t("locations.text")}
        </p>
      </div>
      <div
        className="w-full h-[500px] mt-10"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <iframe
          src="https://widgets.commoninja.com/iframe/89ce720c-eb8f-4fed-b908-e484929b0247"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  )
}
