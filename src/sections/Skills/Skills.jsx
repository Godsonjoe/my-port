import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';
import hsun from '../../assets/html5-balck-icon.svg';
import hmoon from '../../assets/html-icon.svg';
import csun from '../../assets/csssun.svg';
import cmoon from '../../assets/cssmoon.svg';
import js_sun from '../../assets/jssun.svg';
import js_moon from '../../assets/jsmoon.svg';
import py_sun from '../../assets/pythonsun.svg';
import py_moon from '../../assets/pythonmoon.svg';
import react_sun from '../../assets/reactsun.svg';
import react_moon from '../../assets/reactmoon.svg';
import java_sun from '../../assets/javasun.svg';
import java_moon from '../../assets/jsmoon.svg';
import sql_moon from '../../assets/sqlmoon.svg';
import sql_sun from '../../assets/sqlsun.svg';
import django_sun from '../../assets/django_sun.svg';
import django_moon from '../../assets/django_moon.svg';
function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  const html_pic = theme === 'light' ? hsun : hmoon;
  const css_pic = theme === 'light' ? csun : cmoon;
  const js_pic = theme === 'light' ? js_sun : js_moon;
  const react_pic = theme === 'light' ? react_sun : react_moon;
  const py_pic = theme === 'light' ? py_sun : py_moon;
  const java_pic = theme === 'light' ? java_sun : java_moon;
  const sql_pic = theme === 'light' ? sql_sun : sql_moon;
  const dj_pic = theme === 'light' ? django_sun : django_moon;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={html_pic} skill="HTML" />
        <SkillList src={css_pic} skill="CSS" />
        <SkillList src={js_pic} skill="JavaScript" />
        
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={react_pic} skill="React(Basics)" />
        <SkillList src={py_pic} skill="Python" />
        <SkillList src={java_pic} skill="Java" />
        <SkillList src={sql_pic} skill="Sql" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={dj_pic} skill="Django" />
        
      </div>
    </section>
  );
}

export default Skills;
