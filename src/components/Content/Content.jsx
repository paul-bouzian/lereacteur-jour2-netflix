import "./Content.css";
import Section from "./Section/Section";
import movies from "../../assets/movies.json";

const Content = () => {
  return (
    <main>
      {movies.map((movie) => {
        return (
          <Section
            key={movie.category}
            category={movie.category}
            movies={movie.images}
          />
        );
      })}
    </main>
  );
};

export default Content;
