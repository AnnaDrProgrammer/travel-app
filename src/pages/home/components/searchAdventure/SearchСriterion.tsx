import { Typography } from '../../../../shared/ui';
import styles from './SearchCriterion.module.css';

type SearchCriterionProps = {
  imgSrc: string;
  title: string;
  subtitle: string;
};

export const SearchCriterion = ({
  imgSrc,
  title,
  subtitle,
}: SearchCriterionProps) => {
  return (
    <div className={styles.wrapper}>
      <img alt="icon" src={imgSrc} className={styles.icon} />

      <div className={styles.text}>
        <Typography.Text variant="p5" weight="medium" color="invert">
          {title}
        </Typography.Text>
        <Typography.Text variant="p5" weight="regular">
          {subtitle}
        </Typography.Text>
      </div>
    </div>
  );
};
