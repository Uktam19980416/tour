import { Button } from './Button'
import island from '../images/island.jpg'

export const Booking = () => {
  const style = {
    background: `url(${island}) no-repeat center center/cover`,
    filter: 'contrast(10%)',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure background is behind content
  }

  return (
    <div className="relative">
      <div style={style}></div>
      <div className="container relative w-[1440px] max-w-4/5 mx-auto py-28 z-10 max-sm:px-2 max-sm:w-full">
        <div className="flex items-center justify-between max-lg:flex-col">
          <div className="text-center sm:mb-5 ">
            <p className="text-5xl text-slate-200 font-bold max-md:text-3xl">
              ARE YOU LOOKING TO TRAVEL ?
            </p>
            <p className="text-2xl text-slate-200 font-bold max-md:text-lg">
              Make A Reservation By Clicking The Button
            </p>
          </div>
          <Button text="Book Yours Now" />
        </div>
      </div>
    </div>
  )
}
