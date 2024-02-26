import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section title={title} className={s.section}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
