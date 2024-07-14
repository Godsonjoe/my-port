import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profilenew.jpg';
import sun1 from '../../assets/sun1.svg';
import moon2 from '../../assets/moon2.svg';
import leetLight from '../../assets/leetcode-svgrepo-com.svg';
import leetDark from '../../assets/leetcode2.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun1 : moon2;
  const leetcodeIcon = theme === 'light' ? leetLight : leetDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of me"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Godson
          <br />
          Joseph
        </h1>
        <h2>Web Developer</h2>
        <span>
          <a href="https://leetcode.com/Godsonjoe/" target="_blank">
            <img src={leetcodeIcon} alt="leetcode icon" />
          </a>
          <a href="https://github.com/Godsonjoe/godson.git" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/godson-joseph-411633236?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B%2BPIkCeXMR9SRrz7WPZb6PQ%3D%3D" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Aiming to join an established organization as a Web Developer where I can contribute my skills and experience to the team’s success.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
