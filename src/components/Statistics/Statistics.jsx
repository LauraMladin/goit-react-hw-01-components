import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

const createColor = () => {
  const color =
    "rgba(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    0.5 +
    ")";

  return color;
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stats__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={styles.stats}
              key={id}
              style={{ backgroundColor: createColor() }}
            >
              <span className={styles.label}>{label || "No Label"}</span>
              <span className={styles.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string, // Make label optional
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
