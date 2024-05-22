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
      <form className="mt-10 flex flex-col gap-5">
        <div className="flex items-center justify-between max-sm:flex-col gap-5">
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Your Name
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              placeholder="Enter your name"
            />
          </label>
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Your Name
            <input
              type="tel"
              id="name"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
              placeholder="+998 90 123 45 67"
            />
          </label>
        </div>
        <div className="flex items-center justify-between max-sm:flex-col gap-5">
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Number Of Guests
            <select className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl">
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
            Check In Date
            <input
              type="date"
              id="name"
              className="w-full p-3 mt-2 rounded-full bg-transparent border-2 border-solid border-slate-300 text-slate-900"
            />
          </label>
        </div>
        <div>
          <label htmlFor="name" className="block text-slate-600 text-xl w-full">
            Choose Your Destination
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
            Choose Your Visa Support
            <select className="border-2 border-solid border-slate-300 py-3 px-2 bg-transparent w-full rounded-full text-slate-900 text-xl">
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
    </div>
  )
}
