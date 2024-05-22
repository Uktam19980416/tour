import { Button } from "./Button"
import railway from "../images/railway.jpg"
import airplane from "../images/plane.jpg"
export const Explore = () => {
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
          Explore Destinations With Ease
        </h1>
        <p className="text-xl text-slate-500 font-semibold max-md:text-sm">
          Find the best deals on railway and airplane tickets in each city,
          carefully selected for you.
        </p>
      </div>
      <div className="flex gap-5 mt-10 max-lg:flex-col" data-aos="fade-left">
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={railway}
            alt="Railway"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                Cheap Railway Tickets With Us
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                Whole world
              </p>
            </div>
            <Button text="Explore More" />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            Embark on a railway adventure and explore destinations worldwide.
            Whether its the picturesque landscapes, bustling cities, or cultural
            gems, our rail services offer a unique and comfortable way to
            traverse the globe. Immerse yourself in the beauty of different
            cultures, all accessible through our extensive railway network.
          </p>
        </div>
      </div>

      <div className="flex gap-5 mt-10 max-lg:flex-col" data-aos="fade-right">
        <div className="w-4/5 h-[300px] max-sm:w-full object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={airplane}
            alt="Railway"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between max-sm:flex-col">
            <div>
              <p className="text-3xl font-bold max-sm:text-2xl">
                Discover Exciting Air Travel Deals
              </p>
              <p className="text-lg text-slate-500 max-sm:text-sm">
                Whole world
              </p>
            </div>
            <Button text="Explore More" />
          </div>
          <p className="text-xl leading-10 text-slate-500 max-sm:text-sm max-sm:text-center">
            Embark on an airborne adventure and explore destinations worldwide.
            Whether its the breathtaking landscapes, vibrant cities, or cultural
            treasures, our airline services provide a convenient and
            exhilarating way to navigate the globe. Immerse yourself in the
            richness of diverse cultures, all easily accessible through our
            extensive air travel network.
          </p>
        </div>
      </div>
    </div>
  )
}
