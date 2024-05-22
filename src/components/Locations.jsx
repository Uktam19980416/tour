export const Locations = () => {
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto my-20 max-sm:px-2 max-sm:w-full ">
      <div className="text-center w-1/2 max-lg:w-full mx-auto flex flex-col gap-4">
        <h1 className="text-4xl font-bold max-md:text-2xl">Best Locations</h1>
        <p className="text-xl text-slate-500 font-semibold max-md:text-sm">
          Discover the best offers in each city, curated just for you. Immerse
          yourself in a world of savings and indulge in unparalleled
          experiences.
        </p>
      </div>
      <div className="w-full h-[500px] mt-10">
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
