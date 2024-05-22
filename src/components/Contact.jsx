import {Button} from './Button'
export const Contact = () => {
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto bg-slate-50 pt-20 px-20 pb-16 max-sm:px-2 max-sm:w-full ">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold max-md:text-2xl">
          Make Your <span className="text-slate-600">Reservation</span> Through
          This <span className="text-slate-600">Form</span>
        </h1>
      </div>
      <form className="mt-10 flex flex-col gap-5" data-aos="zoom-in-down">
        <div className="flex items-center justify-between max-sm:flex-col gap-5">
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Your Name <span className="text-orange-600">*</span>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              placeholder="Enter your name"
              required
            />
          </label>
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Your Surname <span className="text-orange-600">*</span>
            <input
              type="tel"
              id="name"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              placeholder="+998 90 123 45 67"
              required
            />
          </label>
        </div>
        <div className="flex items-center justify-between max-sm:flex-col gap-5">
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Number Of Guests <span className="text-orange-600">*</span>
            <select className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl required">
              <option defaultValue={1} disabled>
                Select...
              </option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </label>
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Check In Date <span className="text-orange-600">*</span>
            <input
              type="date"
              id="name"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Choose Your Destination <span className="text-orange-600">*</span>
            <select className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl">
              <option defaultValue={1}>Select...</option>
              <option value="">Mekkah</option>
              <option value="">Dubai</option>
              <option value="">Antalya</option>
              <option value="">Barcelona</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Choose Your Visa Support <span className="text-orange-600">*</span>
            <select
              className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl"
              required
            >
              <option defaultValue={1} disabled>
                Select...
              </option>
              <option value="">Saudi Arabia</option>
              <option value="">Europe</option>
              <option value="">Turkey</option>
              <option value="">China</option>
            </select>
          </label>
        </div>
        <div className="max-sm:w-full max-sm:flex max-sm:justify-center">
          <Button text="Make Your Reservation Now" />
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
