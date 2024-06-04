/* eslint-disable react/prop-types */
import "./Section.css";

const Section = ({ category, movies }) => {
  return (
    <section>
      <h2>{category}</h2>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <img src={movie} alt={movie} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Section;
