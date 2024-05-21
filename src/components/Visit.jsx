import { Button } from './Button'
import dubai from '../images/dubai.jpg'
import antalya from '../images/antalya.jpg'
import sheikh from '../images/sheikh.jpg'
import turkey from '../images/turkey.jpg'
export const Visit = () => {
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto my-20">
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl font-bold">Visit One Of Our Countries Now</h1>
        <p className="text-xl text-slate-500 font-semibold">
          Discover the best offers in each city, curated just for you. Immerse
          yourself in a world of savings and indulge in unparalleled
          experiences.
        </p>
      </div>
      <div className="flex gap-5 mt-10">
        <div className="w-4/5 h-[300px] object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={dubai}
            alt="Railway"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">Dubai</p>
              <p className="text-lg text-slate-500">United Arab Emirated</p>
            </div>
            <Button text="Explore More" />
          </div>
          <p className="text-xl leading-10 text-slate-500">
            Dubai is a city and emirate in the United Arab Emirates known for
            luxury shopping, ultramodern architecture and a lively nightlife
            scene. Burj Khalifa, an 830m-tall tower, dominates the
            skyscraper-filled skyline. At its foot lies Dubai Fountain, with
            jets and lights choreographed to music. On artificial islands just
            offshore is Atlantis, The Palm, a resort with water and
            marine-animal parks.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; 8.66 Mil People
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; 41.290 km2
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; $1.100.200
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all">
              Need directions? <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10">
        <div className="w-4/5 h-[300px] object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={antalya}
            alt="Railway"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">Antalya</p>
              <p className="text-lg text-slate-500">Turkey</p>
            </div>
            <Button text="Explore More" />
          </div>
          <p className="text-xl leading-10 text-slate-500">
            Antalya is the fastest-growing city in Turkey, and tourists from
            around the world are discovering its fabulous mix of great beaches
            and traditional Turkish culture. Kids will love the Beach Park,
            which features Aqua Land (a waterslide-fanatics dream) and Dolphin
            Land (home to dolphins, sea lions and white whales). Make sure to
            explore the old town center and to see Hadrians Gate.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; 44.48 Mil People
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; 275.400 km2
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; $946.000
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all">
              Need directions? <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10">
        <div className="w-4/5 h-[300px] object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={sheikh}
            alt="Railway"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">Sharm El-Sheikh</p>
              <p className="text-lg text-slate-500">Egypt</p>
            </div>
            <Button text="Explore More" />
          </div>
          <p className="text-xl leading-10 text-slate-500">
            Sharm El Sheikh is the center of tourism action in Sinai Peninsula
            and it has the world top diving sites. Specially the underwater
            wonders of Ras Mohammed national park that took Sharm city to whole
            different level. The city has diving and shipwreck sites that
            attract both advanced and recreational divers from around the world
            to discover the un parallel marine life deep down the red sea.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; 67.41 Mil People
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; 551.500 km2
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; $425.600
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all">
              Need directions? <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-5 mt-10">
        <div className="w-4/5 h-[300px] object-cover">
          <img
            className="w-full h-full rounded-badge"
            src={turkey}
            alt="Railway"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-bold">Istanbul</p>
              <p className="text-lg text-slate-500">Turkey</p>
            </div>
            <Button text="Explore More" />
          </div>
          <p className="text-xl leading-10 text-slate-500">
            Istanbul is the most populous city in Turkey and its cultural,
            economic and historic center. It is located in north-western part of
            Turkey, divided into European and Asian side by Bosphorus, which
            connects the Sea of Marmara and Black Sea. It is the only city in
            the world that sits on two continents.
          </p>
          <div className="flex items-center justify-between">
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              &nbsp; 67.41 Mil People
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-globe"></i>
              </span>
              &nbsp; 551.500 km2
            </p>
            <p className="text-xl text-slate-500">
              <span>
                <i className="fa-solid fa-house"></i>
              </span>
              &nbsp; $425.600
            </p>
          </div>
          <div className="cursor-pointer w-fit">
            <p className="text-xl font-semibold text-slate-700 hover:translate-x-2 hover:ease-in hover:transition-all">
              Need directions? <span>&#8594;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
