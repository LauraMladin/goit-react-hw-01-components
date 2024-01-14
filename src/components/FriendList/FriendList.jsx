import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <div className={styles.friends}>
      <ul className={styles.friends__list}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className={styles.friends__item} key={id}>
            <span className={`${styles.friends__status} ${styles[isOnline]}`}>
              {isOnline}
            </span>
            <img className={styles.avatar} src={avatar} alt={name} />
            <p className={styles.friends__name}>{name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
