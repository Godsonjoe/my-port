import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/vehicle.jpg';
import ProjectCard from '../../common/ProjectCard';
import proj from '../../assets/vech_pro.pdf';

function Projects() {
  
    
 
  return (
    <section id="projects" className={styles.container}>
       
      <h1 className="sectionTitle">Project</h1>
      <div className={styles.projectsContainer}>
          
         <ProjectCard
          src={viberr}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Vehicle service Management system"
          p="website"
        />
        </div>
        <div className={styles.hide}>
            <pre>
              Languages: Html,Css,Js <br/>
              Framework: Django
            </pre>
        </div>
       <a href={proj} download>
          <button className="project"> Project Images</button>
        </a>
      
      

    </section>
  );
}

export default Projects;
