import bahnhof from '../images/bahnhof.jpg';
import { Button } from './Button';
export const Reservation = () => {
  const style = {
    background: `url(${bahnhof}) no-repeat center center/cover`,
    height: "100vh",
    filter: "contrast(30%)"
  }
  return (
    <>
      <div className="relative h-screen">
        <div
          className="absolute top-0 left-0 w-full h-full backdrop-contrast-125 bg-white/30"
          style={style}
        ></div>
        <div
          className="relative flex flex-col items-center justify-center gap-5 w-full h-full"
          id="contacts"
        >
          <p className="text-3xl text-slate-200 font-medium">
            Book Prefered Deal Here
          </p>
          <hr className="border-2 border-solid border-slate-200 w-1/12" />
          <p className="text-6xl text-slate-200 font-medium">
            Make Your Reservation
          </p>
          <div className="w-fit">
            <Button text="Discover More" />
          </div>
        </div>
      </div>

      <div className="container w-[1440px] max-w-4/5 mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <div className="relative -top-20 py-5 flex flex-col justify-between gap-2 bg-white items-center rounded-3xl shadow shadow-slate-300 border-2">
            <div className="rounded-full py-3 px-4 bg-slate-100">
              <i className="fa-solid fa-phone text-slate-500 text-xl"></i>
            </div>
            <p className="text-3xl font-bold text-slate-600">
              Make a Phone Call
            </p>
            <p className="text-slate-400 text-2xl font-bold">
              +998 99 299 99 96
            </p>
          </div>
          <div className="relative -top-20 py-5 flex flex-col justify-between gap-2 bg-white items-center rounded-3xl shadow shadow-slate-300 border-2">
            <div className="rounded-full py-3 px-4 bg-slate-100">
              <i className="fa-solid fa-envelope text-slate-500 text-xl"></i>
            </div>
            <p className="text-3xl font-bold text-slate-600">
              Contact Us via Email
            </p>
            <p className="text-slate-400 text-2xl font-bold">
              gotour@gmail.com
            </p>
          </div>
          <div className="relative -top-20 py-5 flex flex-col justify-between gap-2 bg-white items-center rounded-3xl shadow shadow-slate-300 border-2">
            <div className="rounded-full py-3 px-4 bg-slate-100">
              <i className="fa-solid fa-location-dot text-slate-500 text-xl"></i>
            </div>
            <p className="text-3xl font-bold text-slate-600">
              Visit Our Offices
            </p>
            <p className="text-slate-400 text-2xl font-bold">Tashkent city</p>
          </div>
        </div>
      </div>
    </>
  )
}
