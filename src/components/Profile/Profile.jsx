import css from './Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.container}>
      <div className={css.card}>
        <img className={css.foto} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.itemParametr}>Followers</span>
          <span className={css.itemValue}>{stats.followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemParametr}>Views</span>
          <span className={css.itemValue}>{stats.views}</span>
        </li>
        <li className={css.item}>
          <span className={css.itemParametr}>Likes</span>
          <span className={css.itemValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
