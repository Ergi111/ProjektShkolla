export const AboutUs = () => {
  return (
    <section className="w-full h-full py-24 flex justify-center items-center">
      <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row gap-8 px-4">
        <img
          className="w-full md:max-w-md object-cover"
          src="https://assets.minorhotels.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/mhg/images/rebrand/homepage/travel_experiences.jpg"
          alt="Travel Experiences"
        />
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-mono mb-4 md:mb-8">
            <span className="underline underline-offset-8">About</span> Us
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
            nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            nobis magni eaque velit eum, id rem eveniet dolor possimus
            voluptas..
          </p>
        </div>
      </div>
    </section>
  );
};
