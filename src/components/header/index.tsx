import { Button, Logo } from '../../shared/ui';
import cn from 'classnames';
import styles from './index.module.css';
import { NavLink } from 'react-router-dom';
import { useIsMobile } from '../../shared/hooks/useIsMobile';
import { Modal } from '../../shared/ui/modal';
import { useState } from 'react';

export type Navigation = {
  title: string;
  link: string;
};

type HeaderProps = {
  navigation: Navigation[];
};

export const Header = ({ navigation }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={cn(styles.header, styles.container)}>
      <Logo />

      <div className={styles.navigation}>
        {navigation?.map(({ title, link }) => (
          <NavLink to={link} key={title}>
            {({ isActive }) => (
              <Button size="smallest" view={isActive ? 'textInverted' : 'text'}>
                {title}
              </Button>
            )}
          </NavLink>
        ))}
      </div>

      {!isMobile && (
        <Button view="secondaryDark" size="xxs">
          Contact Us
        </Button>
      )}

      {isMobile && (
        <div className={styles.menuButton} onClick={() => setIsModalOpen(true)}>
          <div className={styles.menuButtonItem}></div>
          <div className={styles.menuButtonItem}></div>
          <div className={styles.menuButtonItem}></div>
        </div>
      )}

      {isMobile && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className={styles.menu}>
            <a>Page 1</a>
            <a>Page 1</a>
            <a>Page 1</a>
            <a>Page 1</a>
          </div>
        </Modal>
      )}
    </header>
  );
};
