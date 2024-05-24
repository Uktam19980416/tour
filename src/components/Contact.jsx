import { useState } from 'react'
import { Button } from './Button'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

export const Contact = () => {
  const { t } = useTranslation()
  const [selectGuestsNumber, setSelectGuestsNumber] = useState('')
  const [selectDestination, setSelectDestination] = useState('')
  const [selectSupport, setSelectSupport] = useState('')
  const [loading, setLoading] = useState(false)

  const handleGuests = (e) => {
    setSelectGuestsNumber(e.target.value)
  }

  const handleDestination = (e) => {
    setSelectDestination(e.target.value)
  }

  const handleSupport = (e) => {
    setSelectSupport(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    let name = document.getElementById('name').value
    let surname = document.getElementById('mobileNumber').value
    let guests = selectGuestsNumber
    let destination = selectDestination
    let checkin = document.getElementById('checkin').value
    let support = selectSupport

    const token = '7105576872:AAGsRbcj7cRY-ZiWo4prMES5TlXOV_PP2WQ'
    const chatId = '407415106'
    const url = `https://api.telegram.org/bot${token}/sendMessage`
    const messageContent =
      `Ism: ${name} \nFamiliya: ${surname} \nMehmonlar soni: ${guests} \n Borishni xohlagan joy: ${destination} \nKirish sanasi: ${checkin} \nVisa turi: ${support}`

    axios({
        url: url,
        method: 'POST',
        data: {
          chat_id: chatId,
          text: messageContent,
        },
      })
      .then(() => {
        // setLoading(false)
        document.getElementById('submitForm').reset()
        setSelectGuestsNumber('')
        setSelectDestination('')
        setSelectSupport('')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto bg-slate-50 pt-20 px-20 pb-16 max-sm:px-2 max-sm:w-full ">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold max-md:text-2xl">
          {t('contact.form.title')}{' '}
          <span className="text-slate-600">{t('contact.form.subtitle')}</span>
        </h1>
      </div>

      {loading && (
        <div role="alert" className="alert alert-success mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6 text-slate-200"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-slate-200">{t("contact.form.message")}</span>
        </div>
      )}

      <form
        className="mt-10 flex flex-col gap-5"
        data-aos="zoom-in-down"
        onSubmit={handleSubmit}
        id="submitForm"
      >
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
            htmlFor="mobileNumber"
            className="block text-slate-600 text-xl w-full"
          >
            {t('contact.form.mobileNumber')}{' '}
            <span className="text-orange-600">*</span>
            <input
              type="tel"
              id="mobileNumber"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              placeholder="+998901234567"
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
              name="guests"
              onChange={handleGuests}
              required
            >
              <option defaultValue={0}>{t('contact.form.select')}</option>
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
            required
            onChange={handleDestination}
          >
            {t('contact.form.destination')}{' '}
            <span className="text-orange-600">*</span>
            <select className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl">
              <option defaultValue={0}>{t('contact.form.select')}</option>
              <option value={t('contact.form.mekkah')}>
                {t('contact.form.mekkah')}
              </option>
              <option value={t('contact.form.dubai')}>
                {t('contact.form.dubai')}
              </option>
              <option value={t('contact.form.antalya')}>
                {t('contact.form.antalya')}
              </option>
              <option value={t('contact.form.barcelona')}>
                {t('contact.form.barcelona')}
              </option>
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
              onChange={handleSupport}
            >
              <option defaultValue={0}>{t('contact.form.select')}</option>
              <option value="Saudi Arabia">
                {t('contact.form.saudiArabia')}
              </option>
              <option value={t('contact.form.europe')}>
                {t('contact.form.europe')}
              </option>
              <option value={t('contact.form.turkey')}>
                {t('contact.form.turkey')}
              </option>
              <option value={t('contact.form.china')}>
                {t('contact.form.china')}
              </option>
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
