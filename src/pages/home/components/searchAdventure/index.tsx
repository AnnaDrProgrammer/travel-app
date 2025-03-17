import { Button, Typography } from '../../../../shared/ui';

import styles from './index.module.css';
import { SearchCriterion } from './SearchСriterion';

const searchCriterionImg1 = '/public/icon-1.jpg';

export const SearchAdventure = () => {
  return (
    <div className={styles.searchBlock}>
        <div className={styles.searchBlockPhrase}>
      <Typography.Title variant="h1" weight="semibold">
        Life Is Adventure Make The Best Of It
      </Typography.Title>
      </div>

      <div className={styles.searchBlockPanel}>
        <SearchCriterion
          title="Where"
          subtitle="Search destinations"
          imgSrc={searchCriterionImg1}
        />
        <SearchCriterion
          title="Where"
          subtitle="Search destinations"
          imgSrc={searchCriterionImg1}
        />
        <SearchCriterion
          title="Where"
          subtitle="Search destinations"
          imgSrc={searchCriterionImg1}
        />
      </div>

      <Button view="primary" size="s">
        Browse Trip
      </Button>
    </div>
  );
};
