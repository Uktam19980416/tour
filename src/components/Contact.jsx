import { Button } from './Button'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
  const { t } = useTranslation()
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto bg-slate-50 pt-20 px-20 pb-16 max-sm:px-2 max-sm:w-full ">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold max-md:text-2xl">
          {t('contact.form.title')}{' '}
          <span className="text-slate-600">{t('contact.form.subtitle')}</span>
        </h1>
      </div>
      <form className="mt-10 flex flex-col gap-5" data-aos="zoom-in-down">
        <div className="flex items-center justify-between max-sm:flex-col gap-5">
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            {t('contact.form.name')} <span className="text-orange-600">*</span>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              placeholder={t('contact.form.namePlaceholder')}
              required
            />
          </label>
          <label
            htmlFor="surname"
            className="block text-slate-600 text-xl w-full"
          >
            {t('contact.form.surname')}{' '}
            <span className="text-orange-600">*</span>
            <input
              type="tel"
              id="surname"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              placeholder="+998 90 123 45 67"
              required
            />
          </label>
        </div>
        <div className="flex items-center justify-between max-sm:flex-col gap-5">
          <label
            htmlFor="guests"
            className="block text-slate-600 text-xl w-full"
          >
            {t('contact.form.guests')}{' '}
            <span className="text-orange-600">*</span>
            <select
              className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl"
              required
            >
              <option defaultValue={1} disabled>
                {t('contact.form.select')}
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </label>
          <label
            htmlFor="checkin"
            className="block text-slate-600 text-xl w-full"
          >
            {t('contact.form.checkIn')}{' '}
            <span className="text-orange-600">*</span>
            <input
              type="date"
              id="checkin"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              required
            />
          </label>
        </div>
        <div>
          <label
            htmlFor="destination"
            className="block text-slate-600 text-xl w-full"
          >
            {t('contact.form.destination')}{' '}
            <span className="text-orange-600">*</span>
            <select className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl">
              <option defaultValue={1}>{t('contact.form.select')}</option>
              <option value="Mekkah">Mekkah</option>
              <option value="Dubai">Dubai</option>
              <option value="Antalya">Antalya</option>
              <option value="Barcelona">Barcelona</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="visa" className="block text-slate-600 text-xl w-full">
            {t('contact.form.visaSupport')}{' '}
            <span className="text-orange-600">*</span>
            <select
              className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl"
              required
            >
              <option defaultValue={1} disabled>
                {t('contact.form.select')}
              </option>
              <option value="Saudi Arabia">
                {t('contact.form.saudiArabia')}
              </option>
              <option value="Europe">{t('contact.form.europe')}</option>
              <option value="Turkey">{t('contact.form.turkey')}</option>
              <option value="China">{t('contact.form.china')}</option>
            </select>
          </label>
        </div>
        <div className="max-sm:w-full max-sm:flex max-sm:justify-center">
          <Button text={t('contact.form.submit')} />
        </div>
      </form>

      <div className="hidden max-lg:block mt-5">
        <div className="flex justify-around items-center">
          <p className="text-5xl cursor-pointer">
            <a href="#">
              <i className="fa-brands fa-telegram"></i>
            </a>
          </p>
          <p className="text-5xl cursor-pointer">
            <a href="#">
              <i className="fa-brands fa-square-instagram"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
