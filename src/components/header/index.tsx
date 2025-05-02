import { Button, Logo } from '../../shared/ui';
import cn from 'classnames';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export type Navigation = {
  title: string;
  link: string;
  isActive: boolean;
};

type HeaderProps = {
  navigation: Navigation[];
};

export const Header = (props: HeaderProps) => {
  const { navigation } = props;

  return (
    <header className={cn(styles.header, styles.container)}>
      <Logo />

      <div className={styles.navigation}>
        {navigation?.map(({ title, link, isActive }) => (
          <Link to={link}>
            <Button
              key={title}
              size="smallest"
              view={isActive ? 'textInverted' : 'text'}
            >
              {title}
            </Button>
          </Link>
        ))}
      </div>

      <Button view="secondaryDark" size="xxs">
        Contact Us
      </Button>
    </header>
  );
};
