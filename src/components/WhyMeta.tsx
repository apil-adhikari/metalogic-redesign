const WhyMeta = () => {
  return (
    <section className="py-24 flex justify-center bg-gradient-to-b from-[#0B0B0B]/90 to-[#252525] text-white">
      <div className="container">
        <div className="flex justify-center">
          <h3 className="inline-flex border border-white gap-2 t px-3 py-1 rounded-full uppercase items-center font-bold bg-gradient-to-r from-red-500 to to-blue-500 text-black text-2xl">
            <span className="text-lime-400 animate-spin">&#10038;</span>
            Introducing MetaLogic
          </h3>
        </div>
        <div className="text-3xl md:text-4xl text-center font-light py-1">
          <span>Your creative process deservs better. </span>
          <span className="text-white/45">
            You're racing to create exceptaional work, but traditional work
            doesnot work well, they are time consuming and more slow.{" "}
          </span>
          <span className="block">
            Thats why <span className="font-extrabold">MetaLogic</span> exists.{" "}
          </span>
          <span className="text-[#3D7FFE] block">
            We deliver{" "}
            <span className="font-bold italic">cutting-edge solutions</span>{" "}
            through{" "}
            <span className="font-bold italic">
              innovation & close collaboration
            </span>
            , ultimately aiming for{" "}
            <span className="underline ">client success</span> by boosting{" "}
            <span className="underline "> efficiency & ROI</span>.
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhyMeta;
