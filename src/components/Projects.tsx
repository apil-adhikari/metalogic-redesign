import ProjectCard from "./ProjectCard";

// interface {

// }

const Projects = () => {
  return (
    <section className="py-24 flex justify-center">
      <div className="container">
        <div className="flex flex-col justify-center items-center space-y-2">
          <span className="border-2 w-20 text-red-500 rounded-full"></span>
          <h3 className="text-4xl font-bold text-[#001C48]">Latest Projects</h3>
          <span className="font-light text-2xl">
            Best taste in web develpment
          </span>

          <div className="grid grid-cols-2">
            <ProjectCard
              title="Banshawali"
              images={[
                "./Banshawali/chart.svg",
                "./Banshawali/idcard.svg",
                "./Banshawali/contribution.svg",
              ]}
              description="A digital platform could help you view your complete family tree (Banshawali) and manage all your family (Banshaj) information in one central location. This can foster connections across generations by providing a shared space to learn and interact with family history. Additionally, such a platform might offer features to manage and discover local events relevant to your interests near Kathmandu."
            />
            <ProjectCard
              title="Banshawali"
              images={[
                "./Banshawali/chart.svg",
                "./Banshawali/idcard.svg",
                "./Banshawali/contribution.svg",
              ]}
              description="A digital platform could help you view your complete family tree (Banshawali) and manage all your family (Banshaj) information in one central location. This can foster connections across generations by providing a shared space to learn and interact with family history. Additionally, such a platform might offer features to manage and discover local events relevant to your interests near Kathmandu."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
