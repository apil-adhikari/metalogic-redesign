const Hero = () => {
  return (
    <section className="p-24 flex justify-center">
      <div
        className="container flex flex-col
      justify-center items-center"
      >
        <div className="flex justify-center items-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-red-500 to to-blue-500 rounded-full text-neutral-950 font-semibold text-center">
            <span className="animate-pulse">✨</span> 57+ Satisfied Clients
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mt-6">
          Transforming Today For Digital Tomorrow{" "}
        </h1>
        <p className="text-center text-xl text-black/50 mt-8 max-w-2xl">
          We are committed to offering state-of-the-art software solutions that
          enable companies to prosper in the digital world.
        </p>

        <form className="flex justify-center items-center border border-black/15 rounded-full p-2 mt-8 md:flex-1">
          <input
            className="bg-transparent px-4 border-none outline-none p-2 font-mono"
            type="email"
            placeholder="Enter your email"
          />
          <button className="border-white rounded-full px-6 h-10 font-medium bg-red-500 text-neutral-950 whitespace-nowrap cursor-pointer ">
            Contact Us
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
