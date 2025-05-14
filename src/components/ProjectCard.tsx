import { Carousel } from "../utils/Carousel";

interface ProjectCardProps {
  title: string;
  images: string[];
  description: string;
}

const ProjectCard = ({ title, images, description }: ProjectCardProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 space-y-4">
      {/* Render Images in a Carousel or Grid */}
      <div className="w-full h-64 overflow-hidden rounded-lg">
        <Carousel images={images} />
      </div>

      {/* Title */}
      <h2 className="text-3xl font-bold text-center">{title}</h2>

      {/* Description */}
      <p className="text-lg text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ProjectCard;
