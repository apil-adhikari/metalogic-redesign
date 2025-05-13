import React from "react";
import {
  ArrowUpWideNarrowIcon,
  FolderCodeIcon,
  LightbulbIcon,
  Rocket,
  SplinePointerIcon,
} from "lucide-react";

// Sub-component: Card
interface CardType {
  title: string;
  subtitle: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const Card = ({ title, subtitle, Icon }: CardType) => {
  return (
    <div className="w-full p-5 rounded border border-slate-300 relative overflow-hidden group bg-white hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-red-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-blue-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </div>
  );
};

// Main Component: HoverVisionCard
const HoverVisionCard = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Your Vison, Our Work
        </h2>
        <div className="grid gap-6 w-full max-w-5xl mt-10 justify-items-center sm:grid-cols-2 lg:grid-cols-2 ">
          <Card
            title="Ideate"
            subtitle="Let's brainstorm together and explore creative ideas to solve your unique challenges."
            Icon={LightbulbIcon}
          />
          <Card
            title="Design"
            subtitle="Our skilled designers will craft visually stunning and intuitive user interfaces that enhance the user experience."
            Icon={SplinePointerIcon}
          />
          <Card
            title="Develop"
            subtitle="Our expert developers will turn your approved design into a robust and scalable software solution."
            Icon={FolderCodeIcon}
          />
          <Card
            title="Launch"
            subtitle="We'll meticulously prepare for a successful launch, ensuring a smooth transition from development to deployment."
            Icon={Rocket}
          />
          <Card
            title="Scale"
            subtitle="As your business grows, we'll work with you to scale your software and accommodate increasing demands."
            Icon={ArrowUpWideNarrowIcon}
          />
        </div>
      </div>
    </section>
  );
};

export default HoverVisionCard;
