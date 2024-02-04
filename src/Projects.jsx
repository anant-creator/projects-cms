// import Project from './Project';
import { useFetchProjects } from './fetchData';

const Projects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <section className='projects'>
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>
    </section>
    <div className="projects-center">
      {projects.map((data) => {
        const {id, title, link, images_desc, image_url} = data;
        return <a key={id} href={link}
        target='_blank'
        rel='noreferrer'
        className='project'>
          <img src={image_url} alt={images_desc} className='img' />
          <h5>{title}</h5>
        </a>
      })}
    </div>
    </>
  );
};

export default Projects;
