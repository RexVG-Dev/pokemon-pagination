import styles from './tag.module.scss';

type TagType = {
  type: string;
}

export function Tag({type}: TagType) {
  return (
    <div className={`${styles.tag} ${styles[`tag__${type}`]}`}>
      <span>{type.toUpperCase()}</span>
    </div>
  )
}